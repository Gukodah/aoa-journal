"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/home", label: "Vis\u00e3o geral" },
  { href: "/dimensoes", label: "Dimens\u00f5es" },
  { href: "/chefes", label: "Chefes" },
  { href: "/inimigos", label: "Inimigos" },
  { href: "/npcs", label: "NPCs" },
  { href: "/minions", label: "Minions" },
  { href: "/minerios", label: "Minerios & Gemas" },
  { href: "/account", label: "Conta e acesso" },
];

const SideNav = ({ isMobileOpen = false, onCloseMobile }) => {
  const pathname = usePathname();

  const linkClass = (href) => {
    const active =
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
    return active ? "sidenav-link active" : "sidenav-link";
  };

  const handleLinkClick = () => {
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <aside
      className={`sidenav ${isMobileOpen ? "is-open" : ""}`}
      id="app-sidenav"
      data-mobile-open={isMobileOpen ? "true" : "false"}
    >
      <div className="sidenav-mobile-header">
        <div>
          <p className="sidenav-mobile-title">Jornal AoA</p>
        </div>
        <button
          type="button"
          className="sidenav-close"
          aria-label="Fechar sidebar"
          onClick={onCloseMobile}
        >
          <span className="sidenav-close-line" />
        </button>
      </div>
      <nav>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={linkClass(href)}
            onClick={handleLinkClick}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="sidenav-footer">
        <p className="sidenav-footer-text">
          Dados baseados na wiki oficial do Advent of Ascension (Nevermine 2 -
          Tslat 1.1.3).
        </p>
      </div>
    </aside>
  );
};

export default SideNav;
