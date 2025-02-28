import React from "react";
import "./Navbar.css";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img
          src="https://res.cloudinary.com/dyqfcf950/image/upload/v1740726539/lrfrn6cluezmmpy9slso.webp"
          alt="Logo"
          className="logo-img"
        />
      </div>

      <div className="nav-brand">
        <img
          src="https://res.cloudinary.com/dyqfcf950/image/upload/v1740726156/nngy4pogo9ccytqxqgjl.png"
          alt="Brand Name"
          className="brand-img"
        />
      </div>

      <div className="nav-cart">
        <button>
          <FaCartPlus />
        </button>

        <img src="https://imgur.com/a/sbYrDZs" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
