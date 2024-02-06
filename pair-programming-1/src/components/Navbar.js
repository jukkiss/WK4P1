import React from "react";
import Header from "./Header";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <Header />
          <PageLinks parentClass="nav-link" />

          {/* New Link for Registration */}
          <Link to="/registration" className="nav-link">
            Register
          </Link>

          <SocialLinks />
        </div>
      </nav>
    </div>
  );
};


export default Navbar;
