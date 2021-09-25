import React from "react";
import styles from "./Modal.module.css";
import { NavLink } from "react-router-dom";
import Slide from "react-reveal/Slide";
import { IoMdClose } from "react-icons/io";
import { FaHome, FaListOl } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { BiDonateBlood, BiListPlus } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import {
  FaTelegramPlane,
  FaFacebookSquare,
  FaMapMarkedAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
//import { ImCross } from "react-icons/im";
const Modaluser = (props) => {
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const dispatch = useDispatch();
  const fun1 = () => {
    dispatch({ type: "logout" });
  };

  const function1 = () => {
    props.fun();
  };
  return (
    <Slide right>
      <div className={styles.background}>
        <div className={styles.opened}>
          {console.log("hey")}
          <ul className={styles.ul2}>
            <li className={styles.cross}>
              <div className={styles.head1}>
                DONatE
                <div className={styles.head2}>A mission to save lives...</div>
              </div>

              <div onClick={function1}>
                <IoMdClose size={38} className={styles.circleic} />
              </div>
            </li>
            <li>
              <FaHome size={25} className={styles.circlei} />
              <NavLink
                to="/home"
                className={styles.link1}
                activeClassName={styles.active1}
                onClick={function1}
              >
                Home
              </NavLink>
            </li>
            <li>
              <BiDonateBlood size={25} className={styles.circlei} />
              <NavLink
                to="/hospitals"
                className={styles.link1}
                activeClassName={styles.active1}
                onClick={function1}
              >
                Hospitals
              </NavLink>
            </li>
            <li>
              <MdPersonAdd size={25} className={styles.circlei} />
              <NavLink
                to="/help"
                className={styles.link1}
                activeClassName={styles.active1}
                onClick={function1}
              >
                Help
              </NavLink>
            </li>
            {/* <li>
              <BiListPlus size={30} className={styles.circlei2} />
              <NavLink
                to="/hospital/list"
                className={styles.link1}
                activeClassName={styles.active1}
                onClick={function1}
              >
                List
              </NavLink>
            </li> */}
            <li>
              <IoMdLogOut
                size={15}
                className={styles.circlei3}
                fontSize={115}
              />

              <NavLink
                to="/"
                className={styles.link1}
                activeClassName={styles.active1}
                exact
                onClick={function1}
                onClick={fun1}
              >
                Signout
              </NavLink>
            </li>
            {/* <li>
        <NavLink
          to=""
          className={styles.link}
          activeClassName={styles.active}
          exact
        >
          +
        </NavLink>
      </li> */}
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <ul className={styles.ul3}>
          <li>
            <FaFacebookSquare size={25} />
          </li>
          <li>
            <FaMapMarkedAlt size={25} />
          </li>
          <li>
            <FaTwitterSquare size={25} />
          </li>
          <li>
            <FaTelegramPlane size={25} />
          </li>
        </ul>
      </div>
    </Slide>
  );
};

export default Modaluser;
