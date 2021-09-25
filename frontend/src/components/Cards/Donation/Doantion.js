import React, { useState } from "react";
import { AiFillPropertySafety } from "react-icons/ai";
import { MdSignalCellularConnectedNoInternet4Bar } from "react-icons/md";
import styles from "./Donation.module.css";
import img from "../../Image/user.png";
const Donation = (props) => {
  const s1 = props.aadhar;
  const s = props.date;
  return (
    <div className={styles.block}>
      <img src={img} alt="user" className={styles.user} />
      <div className={styles.inner}>
        <div className={styles.one}>
          <p>Aadhar Number</p>
          <div className={styles.aadhar}>
            {s1.substring(0, 4)}-{s1.substring(4, 8)}-{s1.substring(8, 12)}
          </div>
        </div>
        <div className={styles.one}>
          <p>Blood group</p>
          <div className={styles.group}>{props.bgroup}</div>
        </div>

        <div className={styles.one}>
          <p>Time & Date</p>
          <div className={styles.date}>
            {s.substring(11, 19)} {s.substring(0, 10)}
          </div>
        </div>

        <div className={styles.one}>
          <p>Units of Blood</p>
          <div>{props.unit} units</div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
