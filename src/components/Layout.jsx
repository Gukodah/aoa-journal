"use client";

import React, { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import NavigationProgress from "./NavigationProgress";
import { ProgressProvider } from "../context/ProgressProvider.jsx";

const Layout = ({ children, initialProgress }) => {
  const pathname = usePathname();
  const { isLoaded, isSignedIn, user } = useUser();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isAuthRoute = pathname === "/" || pathname.startsWith("/auth");

  useEffect(() => {
    const syncUser = async () => {
      if (!isLoaded || !isSignedIn || !user?.id) return;

      const storageKey = `aoa_user_synced_${user.id}`;
      if (typeof window !== "undefined" && localStorage.getItem(storageKey))
        return;

      try {
        const res = await fetch("/api/user-sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clerkId: user.id,
            email: user.primaryEmailAddress?.emailAddress,
          }),
        });
        if (res.ok && typeof window !== "undefined") {
          localStorage.setItem(storageKey, "1");
        }
      } catch {
        // ignore client sync errors; user can retry on next mount
      }
    };

    syncUser();
  }, [isLoaded, isSignedIn, user]);

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  if (isAuthRoute) {
    return (
      <div className="app-root auth-shell">
        <main className="auth-main">{children}</main>
      </div>
    );
  }

  return (
    <>
      <SignedIn>
        <ProgressProvider initialProgress={initialProgress}>
          <div className="app-root">
            <Suspense fallback={null}>
              <NavigationProgress />
            </Suspense>
            <NavBar onToggleNav={toggleNav} isNavOpen={isNavOpen} />
            <div className="app-shell">
              <SideNav isMobileOpen={isNavOpen} onCloseMobile={closeNav} />
              <main className="app-main">{children}</main>
            </div>
            <div
              className={`sidenav-overlay ${isNavOpen ? "is-visible" : ""}`}
              aria-hidden={!isNavOpen}
              onClick={closeNav}
            />
          </div>
        </ProgressProvider>
      </SignedIn>
      <SignedOut>
        <SignedOutRedirect redirectTo="/" />
      </SignedOut>
    </>
  );
};

const SignedOutRedirect = ({ redirectTo }) => {
  const router = useRouter();
  useEffect(() => {
    router.replace(redirectTo);
  }, [router, redirectTo]);
  return null;
};

export default Layout;
