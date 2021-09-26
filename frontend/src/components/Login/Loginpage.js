import React, { useState } from "react";
import styles from "./Loginpage.module.css";
import { GoMarkGithub, GoMail } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { BsDroplet } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Blob from "../../Ui/Blob";
import Img1 from "../Image/giphy.gif";
import Img2 from "../Image/doctors.png";
import Img3 from "../Image/donoruser.png";
import Img4 from "../Image/admind.png";

import Loginhos from "./Loginhos";
import Loginuser from "./Loginuser";
import Loginadmin from "./Loginadmin";

const Loginpage = () => {
  const [but, setBut] = useState(false);
  const [but2, setBut2] = useState(false);
  const onclickselect1 = () => {
    setBut(true);
    setBut2(false);
  };
  const onclickselect2 = () => {
    setBut(false);
    setBut2(false);
    
  };
  const onclickselect3 = () => {
    setBut(false);
    setBut2(true);
  };

  const onclickselect4 = () => {
    setBut2(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.logo_name}>
          <div className={styles.imageprofile}>
            <img src={Img1} alt="logo pimage" className={styles.logo} />
            <div className={styles.box}>
              <span className={styles.do}>DONatE</span>
            </div>
          </div>
          <div className={styles.fifty}>
            <div className={styles.select}>
              <button
                className={but && !but2 ? styles.button2 : styles.button1}
                onClick={onclickselect1}
              >
                Hostpital
              </button>
              <button
                className={!but && !but2 ? styles.button2 : styles.button1}
                onClick={onclickselect2}
              >
                User
              </button>
              <button
                className={!but && but2 ? styles.button2 : styles.button1}
                onClick={onclickselect3}
              >
                Admin
              </button>
            </div>
          </div>

          {/* <div className={styles.select2}>
            <button
              className={!but2 ? styles.button1 : styles.button2}
              onClick={onclickselect3}
            >
              SignUp
            </button>
            {!but ? (
              <button
                className={
                  !but
                    ? !but2
                      ? styles.button2
                      : styles.button1
                    : styles.button1
                }
                onClick={onclickselect4}
              >
                Login
              </button>
            ) : null}
          </div> */}
        </div>
        {but ? <Loginhos /> : but2 ? <Loginadmin /> : <Loginuser />}

        <div className={styles.profile}>
          <Blob />
          {but ? (
            <img src={Img2} alt="Hospital" className={styles.img2} />
          ) : but2 ? (
            <img src={Img4} alt="Admin" className={styles.img2} />
          ) : (
            <img src={Img3} alt="User" className={styles.img2} />
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          Blood Donation Website{" "}
          <span style={{ fontsize: "10px" }}>© Error 404</span>
        </p>
        <ul>
          <li>
            <a href="#">
              <GoMarkGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <GoMail />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#">
              <MdCall />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Loginpage;
