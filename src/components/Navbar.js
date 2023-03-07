import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content flex justify-evenly">
      <a className="btn btn-ghost normal-case text-3xl">Awesome - Auth</a>

      <div className="flex justify-between">
        <Link className="btn btn-ghost normal-case text-xl" to={"/home"}>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"/login"}>Log In</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"/register"}>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
