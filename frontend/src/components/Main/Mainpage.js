import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import styles from "./Mainpage.module.css";
import Info from "../../Ui/Info";
import { BiDonateBlood, BiUserCheck } from "react-icons/bi";
import { FaRegHospital } from "react-icons/fa";
import { CgUserlane } from "react-icons/cg";

const Mainpage = () => {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  const { text } = useTypewriter({
    words: ["Blood,", "Human,", "Family,", "India..."],
    loop: 0,
    cursorStyle: "_",
    deleteSpeed: "2",
  });

  return (
    <div className={styles.main}>
      <div className={small ? styles.hiddena : styles.amount}>
        <div className={small ? styles.hidden : styles.amountt}>Amount:</div>
        <div className={styles.amounta}>56 ETH</div>
      </div>
      <div className={styles.mainpage}>
        <div className={styles.head}>
          <h1 className={styles.headtxt}>
            Give your contribution to save..
            <br />
            <div className={styles.typewriter}>
              {text}
              <span className={styles.blue}>
                <Cursor />
              </span>
            </div>
          </h1>
          <div className={styles.fifty}>
            <Link to="Help" className={styles.but1}>
              Know More...
            </Link>
            <Link to="Help" className={styles.but2}>
              New Donor
            </Link>
          </div>
        </div>
      </div>
      <h1 className={styles.title}>Stats</h1>
      <div className={styles.footwhite}>
        <ul className={styles.footerul}>
          <li>
            <div className={styles.box}>
              <div className={styles.iconbox1}>
                <FaRegHospital className={styles.iconwhite} />
              </div>
              <div className={styles.box2}>
                <p>Hospitals</p>
                <p>
                  <p className={styles.big}>21</p>
                </p>
              </div>
              <h1>All time</h1>
            </div>
          </li>
          <li>
            <div className={styles.box}>
              <div className={styles.iconbox2}>
                <BiUserCheck className={styles.iconwhite} />
              </div>
              <div className={styles.box2}>
                <p>Donors</p>
                <p>
                  <p className={styles.big}>248</p>
                </p>
              </div>
              <h1>All time</h1>
            </div>
          </li>
          <li>
            <div className={styles.box}>
              <div className={styles.iconbox3}>
                <BiDonateBlood className={styles.iconwhite} />
              </div>
              <div className={styles.box2}>
                <p>Blood Donated</p>
                <p>
                  <p className={styles.big}>268</p>units
                </p>
              </div>
              <h1>All Time</h1>
            </div>
          </li>
          <li>
            <div className={styles.box}>
              <div className={styles.iconbox4}>
                <CgUserlane className={styles.iconwhite} />
              </div>
              <div className={styles.box2}>
                <p>Recipient</p>
                <p>
                  <p className={styles.big}>120</p>
                </p>
              </div>
              <h1>All time</h1>
            </div>
          </li>
        </ul>
      </div>
      <h1 className={styles.title}>Further</h1>
      <Info />
    </div>
  );
};

export default Mainpage;
