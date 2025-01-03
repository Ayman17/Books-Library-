import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function NavBar({ userData, logout }) {
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
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/books"}
              >
                Books
              </Link>
            </li>
            {userData && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/categories"}
                  >
                    Categories
                  </Link>
                </li>
              </>
            )}
          </ul>
          {/* Social Icons */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item text-white fs-5 mx-4">
              <i className="fa-brands fa-facebook m-1"></i>
              <i className="fa-brands fa-x-twitter m-1"></i>
              <i className="fa-brands fa-instagram m-1"></i>
              <i className="fa-brands fa-spotify m-1"></i>
            </li>

            {/* Authentication Links */}
            {userData == null && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="register"
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="login"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
            {userData && (
              <li className="nav-item logout" onClick={logout}>
                Logout
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
