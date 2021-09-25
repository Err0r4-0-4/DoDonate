import React from "react";
import styles from "./Other2.module.css";
import {
  FaUser,
  FaPhoneAlt,
  FaAddressCard,
  FaPrescriptionBottle,
} from "react-icons/fa";
import { AiFillSecurityScan, AiFillCalendar } from "react-icons/ai";
import { CgGenderMale } from "react-icons/cg";
import { GiGroupedDrops } from "react-icons/gi";
const Other2 = () => {
  return (
    <div className={styles.div}>
      <p>Enter the Aadhar Number</p>
      <ul className={styles.ul}>
        <li>
          <div className={styles.icon}>
            <AiFillSecurityScan />
          </div>
          <div>Aadhar Number</div>
        </li>
        <li>
          <div className={styles.icon}>
            <GiGroupedDrops />
          </div>
          <div>Blood Group</div>
        </li>
        <li>
          <div className={styles.icon}>
            <FaPrescriptionBottle />
          </div>
          <div>Units of Blood</div>
        </li>
      </ul>
    </div>
  );
};

export default Other2;
