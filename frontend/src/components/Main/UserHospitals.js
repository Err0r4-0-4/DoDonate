import React, { useState, useEffect } from "react";
import { MdSignalCellularConnectedNoInternet4Bar } from "react-icons/md";
import styles from "./userHospitals.module.css";
import EachPage from "../../Ui/EachPage";
import Hospital from "../Cards/Hospitals/Hospital";
import Spinner from "../../Ui/Spinner";
import axios from "axios";

const UserHospitals = () => {

  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {

    setLoading(true);

    let url = `https://dodonate-backend.herokuapp.com/hospital/getHospital`;
    console.log(url);

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setHospitals(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  let hospitalsArray = (
    <div className={styles.flexhos}>
      {hospitals.map((hospital) => (
        <Hospital
          city={hospital.city}
          email={hospital.email}
          address={hospital.ethAddress}
          name={hospital.hospitalName}
          state={hospital.state}
        />
      ))}
    </div>
  );

  return (
    <EachPage>
      {loading ? <Spinner/> : null}
      <div className={styles.box}>
        <div className={styles.bar}>
          <p>List of Hospitals </p>
        </div>
        {hospitalsArray}
      </div>
    </EachPage>
  );
};

export default UserHospitals;
