import React from "react";
import styles from "./Other.module.css";
import { FaUser, FaPhoneAlt, FaAddressCard } from "react-icons/fa";
import { AiFillSecurityScan, AiFillCalendar } from "react-icons/ai";
import { CgGenderMale } from "react-icons/cg";
const Other = () => {
  return (
    <div className={styles.div}>
      <h1>Add a New Donor</h1>
      <p>Personal Information</p>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <div className={styles.icon}>
            <FaUser />
          </div>
          <div>Name</div>
        </li>
        <li>
          <div className={styles.icon}>
            <FaPhoneAlt />
          </div>
          <div>Mobile Number</div>
        </li>
        <li>
          <div className={styles.icon}>
            <AiFillSecurityScan />
          </div>
          <div>Aadhar Number</div>
        </li>
        <li>
          <div className={styles.icon}>
            <AiFillCalendar />
          </div>
          <div>Age</div>
        </li>
        <li>
          <div className={styles.icon}>
            <CgGenderMale />
          </div>
          <div>Gender</div>
        </li>
        <li>
          <div className={styles.icon}>
            <FaAddressCard />
          </div>
          <div>City And State</div>
        </li>
      </ul>
    </div>
  );
};

export default Other;
