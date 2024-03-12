import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)"  }}
        >
          © 2023 Copyright:
          <Link className="text-reset fw-bold" to="#">
            MyBlog.com
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Footer;
