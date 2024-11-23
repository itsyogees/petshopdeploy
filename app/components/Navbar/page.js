"use client";


import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaRegHeart,
  FaRegUserCircle,
  FaRegBell,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu
  const pathname = usePathname(); // Get the current route

  // Toggle menu and body overlay
  const toggleMenu = () => {
    if (window.innerWidth <= 854) {
      setIsMenuOpen(!isMenuOpen);
      document.body.classList.toggle("menu-open", !isMenuOpen);
    }
  };

  // Close menu on body click
  const handleBodyClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
      document.body.classList.remove("menu-open");
    }
  };

  // Add and clean up event listener
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleBodyClick);
    } else {
      document.removeEventListener("click", handleBodyClick);
    }
    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, [isMenuOpen]);

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, []);

  // Add `active` class based on the current route
  const getLinkClass = (href) => {
    return pathname === href ? "active" : "";
  };
  return (
    <div className="navbarMain">
    <div className="navbarContainer">
      <nav className="navbar">
        {/* Logo Section */}
        <div className="navIcons">
          <div className="menuToggle" onClick={toggleMenu}>
            {!isMenuOpen ? (
              <FaBars className="icon" />
            ) : (
              <FaTimes className="icon" />
            )}
          </div>
          <div className="logo">
            <Link href="/">
              <img src="/image/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Navigation Items */}
          <ul
            ref={menuRef} // Attach the ref here
            className={`navItems ${isMenuOpen ? "active" : ""}`}
          >
            <li>
              <Link
                href="/"
                className={getLinkClass("/")}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pages/Pets"
                className={getLinkClass("/pages/Pets")}
                onClick={toggleMenu}
              >
                Pets
              </Link>
            </li>
            <li>
              <Link
                href="/pages/Products"
                className={getLinkClass("/pages/Products")}
                onClick={toggleMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/pages/Shop"
                className={getLinkClass("/pages/Shop")}
                onClick={toggleMenu}
              >
                Shops
              </Link>
            </li>
            <li>
              <Link
                href="/pages/Blog"
                className={getLinkClass("/pages/Blog")}
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side Icons */}
        <div className="rightMenu">
          <Link href="/pages/Notification" className="iconLink">
            <FaRegBell className="icon" />
          </Link>
          <Link href="/pages/Profile" className="iconLink">
            <span className="helloText">
              John <img src="/image/profile.png" alt="" />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  </div>
  );
};

export default Navbar;
