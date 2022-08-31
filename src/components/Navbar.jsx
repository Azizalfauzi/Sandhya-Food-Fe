import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../ic-black.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Logout, reset } from "../features/authSlices";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => (state = state.auth));
  const LogOut = () => {
    dispatch(Logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/dashboard">
            <img
              src={Logo}
              width="28"
              height="28"
              alt="logo"
              className="mr-2"
            />
            <h1 className="title">Sandhya Food</h1>
          </NavLink>

          {/* <NavLink
            href="#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </NavLink> */}
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={LogOut} className="button is-light">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
