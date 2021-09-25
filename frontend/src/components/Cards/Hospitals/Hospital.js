import React, { useState } from "react";
import { MdSignalCellularConnectedNoInternet4Bar } from "react-icons/md";
import styles from "./Hospital.module.css";
import img from "../../Image/hospital.jpg";
import { BiCurrentLocation, BiPhoneCall } from "react-icons/bi";

const Hospital = (porps) => {
  return (
    <div className={styles.hos}>
      <img src={img} alt="hospital" className={styles.img} />
      <div className={styles.name}>{porps.name}</div>
      <p>Contact Us:</p>
      <div className={styles.email}>{porps.email}</div>
      <p>Etherium Account:</p>
      <div className={styles.acc}>{porps.address}</div>
      <div className={styles.city}>
        {porps.city} , {porps.state}
      </div>

      <div className={styles.hundred}>
        <a href="#" className={styles.a}>
          <BiPhoneCall />
          Contact Us
        </a>
        <hr />
        <a href="#" className={styles.a2}>
          <BiCurrentLocation />
          Location
        </a>
      </div>
    </div>
  );
};

export default Hospital;
