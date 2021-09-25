import React from "react";
import styles from "./Info.module.css";
import { FiUserPlus, FiShare2, FiList } from "react-icons/fi";
import { BiDonateBlood, BiListPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
const Infouser = () => {
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

        <h2>Add a New Hospital</h2>
        <p>
          Admininstrator are allocated by the service provider and can add
          hospitals to the list.
        </p>
        <Link to="/hospitals" className={styles.but1}>
          Add a Hospital
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
        <h2>Need Assistance</h2>
        <p>
          Feel free to take any help or assistance if you face any problems or
          use the added chatbot.
        </p>
        <Link to="/help" className={styles.but3}>
          Assistance
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

        <h2>Hospital List</h2>
        <p>
          Conatins the list of hospitals where you can donate your blood or pay
          your earnings.
        </p>
        <Link to="list" className={styles.but1}>
          Lists
        </Link>
      </div>
    </div>
  );
};

export default Infouser;
