"use client";

import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./UserMenu";

const NavBar = ({ onToggleNav = () => {}, isNavOpen = false }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button
          type="button"
          className={`navbar-mobile-toggle ${isNavOpen ? "is-active" : ""}`}
          aria-label={
            isNavOpen ? "Fechar navega\u00e7\u00e3o" : "Abrir navega\u00e7\u00e3o"
          }
          aria-expanded={isNavOpen}
          aria-controls="app-sidenav"
          onClick={onToggleNav}
        >
          <span className="navbar-mobile-toggle-line" />
        </button>
        <img src="/aoa-logo.png" alt="AoA logo" className="navbar-logo" />
        <div>
          <h1 className="navbar-title">Nevermine 2 Journal</h1>
        </div>
      </div>
      <div className="navbar-actions">
        <SignedIn>
          <UserMenu />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button type="button" className="navbar-signin-btn">
              Entrar
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default NavBar;
