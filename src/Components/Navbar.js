import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ totalQty }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand text-danger" to="/">
          F M U <i className="bi bi-circle-half"></i>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                <i className="bi bi-house-fill"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <i className="bi bi-boxes"></i> Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="bi bi-bag-check-fill"></i> Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="bi bi-file-earmark-person-fill"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">
                <i className="bi bi-telephone-inbound-fill"></i> Contact Us
              </Link>
            </li>
          </ul>
          <Link className="nav-link" to="/admin">
            <button className="btn btn-outline-info  " type="submit">
              Admin
            </button>
          </Link>
          <Link className="nav-link" to="/login">
            <button className="btn btn-danger" type="submit">
              Login
            </button>
          </Link>
          <Link className="nav-link" to="/cart">
            <span className="badge bg-danger" style={{ fontSize: 16 }}>
              {totalQty}
            </span>
            <i
              className="bi bi-cart-check text-white "
              style={{ fontSize: 25, paddingLeft: 10 }}
            ></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
