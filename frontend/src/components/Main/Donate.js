import React, { useState, useEffect } from "react";
import Manager from "../../ethereum/manager";
import web3 from "../../ethereum/web3";
import styles from "./Donate.module.css";
import Other2 from "./Other2";
import Form2 from "../form/Form2";
import EachPage from "../../Ui/EachPage";
import Slide from "react-reveal/Slide";

const Donate = () => {
  return (
    <EachPage>
      <Slide right>
        <div className={styles.box}>
          <div className={styles.bar}>
            <p>Donate </p>
          </div>
          <Other2 className={styles.other} />
          <Form2 className={styles.form} />
        </div>
      </Slide>
    </EachPage>
  );
};

export default Donate;
