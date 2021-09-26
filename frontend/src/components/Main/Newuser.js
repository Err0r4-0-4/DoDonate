import React, { useState, useEffect } from "react";
import web3 from "../../ethereum/web3";
import styles from "./Newuser.module.css";
import Form from "../form/Form";
import Other from "./Other";
import Slide from "react-reveal/Slide";
import EachPage from "../../Ui/EachPage";
import Spinner from "../../Ui/Spinner";

const Newuser = () => {

  return (
    <EachPage>
      <Slide left>
        <div className={styles.box}>
          <div className={styles.bar}>
            <p>New Donor details</p>
          </div>
          <Other className={styles.other} />
          <Form className={styles.form} />
        </div>
      </Slide>
    </EachPage>
  );
};

export default Newuser;
