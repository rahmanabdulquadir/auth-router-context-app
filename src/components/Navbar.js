import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/UserContext";

const Navbar = () => {
  const {user, logOut} = useContext(authContext)
  // console.log(user)

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(err => console.error(err))
  }
  return (
    <div className="navbar bg-primary text-primary-content flex justify-evenly">
      <a className="btn btn-ghost normal-case text-3xl">Awesome - Auth</a>

      <div className="flex justify-between">
        <Link className="btn btn-ghost normal-case text-xl" to={"/home"}>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"/login"}>Log In</Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"/register"}>Register</Link>
        {user?.email && <span> Welcome Mr.{user?.email}</span>}
        {
          user?.email ? 
          <button onClick={handleLogOut} className="btn btn-sm">LogOut</button>
          :
          <Link to={'/login'}> <button className="btn btn-sm">Login</button> </Link>
        }

      </div>
    </div>
  );
};

export default Navbar;
