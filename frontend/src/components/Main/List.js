import React, { useState, useEffect } from "react";
import web3 from "../../ethereum/web3";

import Manager from "../../ethereum/manager";
import Donor from "../../ethereum/donor";
import Donation from "../Cards/Donation/Doantion";
import EachPage from "../../Ui/EachPage";

import axios from "axios";

import styles from "./List.module.css";
import Spinner from "../../Ui/Spinner";

const List = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {

    setLoading(true);

    let url = `https://dodonate-backend.herokuapp.com/hospital/getPatientData?hospitalId=${localStorage.getItem(
      "hospitalId"
    )}`;
    console.log(url);

    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setDonations(res.data.data);
        setLoading(false);
      })
      .then((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  let donationsArray = (
    <div>
      {donations.map((donation) => (
        <Donation
          aadhar={donation.aadharNo}
          bgroup={donation.bgroup}
          date={donation.date}
          unit={donation.unit}
        />
      ))}
    </div>
  );

  return (
    <EachPage>
      {loading ? <Spinner/> : null}
      <div className={styles.box}>
        <div className={styles.bar}>
          <p>Users List</p>
        </div>
        {donationsArray}
      </div>
    </EachPage>
  );
};

export default List;
