import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  let token = localStorage.getItem("jwt");
  const Navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("jwt");
    Navigate("/");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          {! token ? (
            <>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-primary">Signup</button>
              </Link>
            </>
          ) : (
            <button onClick={logout} className="btn btn-primary">
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
