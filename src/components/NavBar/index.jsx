import React from "react";
import NavLinkCom from "./components/NavLinkCom";
import { Link } from "react-router-dom";
import "./style.css";

let navLinks = [
  { name: "Home", path: "home" },
  { name: "Books", path: "books" },
  { name: "People", path: "people" },
];

let authLinks = [
  { name: "Login", path: "login" },
  { name: "Register", path: "register" },
  { name: "Logout", path: "logout" },
];

export default function NavBar() {
  return (
    // TODO: make the navbar fixed
    <nav className="navbar navbar-expand-lg navbar-dark w-100 fs-5">
      <div className="container">
        {/* Main Logo */}
        <Link className="navbar-brand" to="home">
          BookStore
        </Link>

        {/* Collapse button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Main Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((navLink) => (
              <NavLinkCom key={navLink.name} link={navLink} />
            ))}
          </ul>
          {/* Social Icons */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item text-white fs-5">
              <i className="fa-brands fa-facebook m-1"></i>
              <i className="fa-brands fa-x-twitter m-1"></i>
              <i className="fa-brands fa-instagram m-1"></i>
              <i className="fa-brands fa-spotify m-1 me-4"></i>
            </li>
            {/* Authentication Links */}
            {authLinks.map((link) => (
              <NavLinkCom key={link.name} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
