import React from "react";
import styles from "./Info.module.css";
import { FiUserPlus, FiShare2, FiList } from "react-icons/fi";
import { BiDonateBlood, BiListPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div className={styles.box}>
      <div className={styles.inside}>
        <div className={styles.icon}>
          <FiUserPlus
            size={25}
            strokeWidth="1.5px"
            strokeOpacity={1}
            color="white"
          />
        </div>

        <h2>Add a Donor</h2>
        <p>
          We add a new donor and fill all important information such as Aadhar
          Number, Name, Contact Information and Location.
        </p>
        <Link to="new" className={styles.but1}>
          New Donor
        </Link>
      </div>
      <div className={styles.inside2}>
        <div className={styles.icon2}>
          <FiShare2
            size={25}
            strokeWidth="1.5px"
            strokeOpacity={1}
            color="white"
          />
        </div>
        <h2>Existing Donor</h2>
        <p>
          We should have a pre-existing donor with a registered Aadhar Number
          and proceed with Blood Donation.
        </p>
        <Link to="donate" className={styles.but3}>
          Donate
        </Link>
      </div>
      <div className={styles.inside3}>
        <div className={styles.icon3}>
          <FiList
            size={25}
            strokeWidth="1.5px"
            strokeOpacity={1}
            color="white"
          />
        </div>

        <h2>Useful List</h2>
        <p>
          Conatins all the useful lists of Patients and Other hospital also
          providing privacy to Donors.
        </p>
        <Link to="list" className={styles.but1}>
          Lists
        </Link>
      </div>
    </div>
  );
};

export default Info;
