import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { AiFillGitlab } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import img from "../components/Image/hand.gif";
import img2 from "../components/Image/drop.gif";

const Footer = () => (
  <div className={styles.footer}>
    <img src={img2} className={styles.img2} alt="GIF DROp" />

    <img src={img} className={styles.img} alt="GIF hand" />

    <div className={styles.flex}>
      <div className={styles.fitems}>
        <ul className={styles.fitemli}>
          <li>
            <Link to="/creators">HOME</Link>
          </li>

          <li>
            <Link href="history">HELP</Link>
          </li>
          <li>
            <a href="#">SIGNOUT</a>
          </li>
        </ul>
      </div>
      <div className={styles.fitems}>
        <ul className={styles.fitemli}>
          <li>
            <Link href="/home">LIST</Link>
          </li>
          <li>
            <Link href="/orders">ABOUT</Link>
          </li>
          <li>
            <Link to="/">MY DONATIOn</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className={styles.last}> ErrOr 4:O4</div>
    <div className={styles.fitemsm}>
      <ul className={styles.fitemli}>
        <li>
          <a href="https://github.com/extend">
            <AiFillGitlab />
          </a>
        </li>

        <li>
          <a href="https://instagram.com/extend">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href="mailto:support@extend.com">
            <AiFillMail />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/extend">
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </div>
    <br />
    <div className={styles.last2}>...DO DOnate...</div>
  </div>
);

export default Footer;
