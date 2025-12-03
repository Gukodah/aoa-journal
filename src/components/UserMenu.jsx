"use client";

import { useEffect, useRef, useState } from "react";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export const UserMenu = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSignOut = async () => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("aoa_auth_intent");
      }
    } catch {
      // ignore storage errors
    }
    await signOut({ redirectUrl: "/" });
  };

  const handleManage = () => {
    setOpen(false);
    router.push("/account");
  };

  if (!isLoaded) {
    return <div className="navbar-user-trigger skeleton-avatar" />;
  }

  const avatar = user?.imageUrl;
  const name = user?.fullName || user?.username || "Usuario";
  const email = user?.primaryEmailAddress?.emailAddress;

  return (
    <div className="user-menu" ref={menuRef}>
      <button
        type="button"
        className="navbar-user-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <img
          src={avatar}
          alt={name}
          className="navbar-user-avatar"
          referrerPolicy="no-referrer"
        />
      </button>

      {open && (
        <div className="user-menu-card">
          <div className="user-menu-header">
            <img
              src={avatar}
              alt={name}
              className="user-menu-avatar"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="user-menu-name">{name}</div>
              {email && <div className="user-menu-email">{email}</div>}
            </div>
          </div>

          <div className="user-menu-actions">
            <button
              type="button"
              className="user-menu-action"
              onClick={handleManage}
            >
              <span className="user-menu-icon" aria-hidden="true">
                ⚙️
              </span>
              <span>Conta e preferências</span>
            </button>
            <button
              type="button"
              className="user-menu-action user-menu-action-danger"
              onClick={handleSignOut}
            >
              <span className="user-menu-icon" aria-hidden="true">
                ↩
              </span>
              <span>Sair</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
