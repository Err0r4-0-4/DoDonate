import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Img1 from "../components/Image/giphy.gif";
import Modaladmin from "./Modaladmin";
import Slide from "react-reveal/Slide";
import { useSelector, useDispatch } from "react-redux";
const HeaderUser = () => {
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const dispatch = useDispatch();
  const fun1 = () => {
    dispatch({ type: "logout" });
  };

  const [open, setOpen] = useState(false);
  const clickhandler = () => {
    setOpen(!open);
  };
  let header = false;
  const location = useLocation();

  if (location.pathname !== "/hospital/home") header = true;

  const signOutHandler = () => {
    window.location.reload();
    localStorage.clear();
  };
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <>
      {open ? (
        <Modaladmin fun={clickhandler} />
      ) : (
        <div className={small ? styles.header : styles.header2}>
          <div className={styles.logo_}>
            <img
              src={Img1}
              alt="Logo"
              className={small ? styles.nologo : styles.logo}
            ></img>
            <p className={styles.logoname}>DONatE</p>
          </div>

          <ul className={styles.ul}>
            <li>
              <NavLink
                to="/home"
                className={styles.link}
                activeClassName={styles.active}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hospitals"
                className={styles.link}
                activeClassName={styles.active}
              >
                Hospitals
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/hospitals"
                className={styles.link}
                activeClassName={styles.active}
              >
                Hospitals
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/help"
                className={styles.link}
                activeClassName={styles.active}
                exact
              >
                Help
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={styles.link}
                activeClassName={styles.active}
                exact
                onClick={signOutHandler}
              >
                Signout
              </NavLink>
            </li>
            {/* */}
          </ul>
          <div className={styles.burger} onClick={clickhandler}>
            <div className={styles.burgerbut}>
              <div className={styles.lines}></div>
              <div className={styles.lines}></div>
              <div className={styles.lines}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderUser;
