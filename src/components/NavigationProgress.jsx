'use client';

import { useEffect, useState, useTransition } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const NavigationProgress = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // When pathname or searchParams change, navigation completed
    setIsNavigating(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Ignore external links, hash links, and same-page links
      if (
        href.startsWith('http') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) {
        return;
      }

      // Check if it's a different route
      const currentPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      if (href !== currentPath && href !== pathname) {
        setIsNavigating(true);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname, searchParams]);

  if (!isNavigating) return null;

  return (
    <div className="navigation-progress-overlay" role="status" aria-live="polite">
      <div className="navigation-progress-card">
        <img
          src="/aoa-logo.png"
          alt="Nevermine 2"
          className="navigation-progress-logo"
          loading="eager"
        />
        <p className="navigation-progress-text">Carregando...</p>
        <div className="navigation-progress-spinner" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
};

export default NavigationProgress;