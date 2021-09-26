import React, { useState, useEffect } from "react";
import web3 from "../../ethereum/web3";

import Manager from "../../ethereum/manager";
import Donor from "../../ethereum/donor";
import Hospital from "../Cards/Hospitals/Hospital";
import EachPage from "../../Ui/EachPage";
import axios from "axios";

import styles from "./AdminHospitals.module.css";
import {
  FaHospital,
  FaMailBulk,
  FaAddressCard,
  FaGlobeAfrica,
} from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { MdAccountBalance } from "react-icons/md";
const AdminHospital = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState([]);
  const [hospitalName, setHospitalName] = useState([]);
  const [hospitalCity, setHospitalCity] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  useEffect(async () => {
    let url = `https://dodonate-backend.herokuapp.com/hospital/getHospital`;
    console.log(url);

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setHospitals(res.data.data);
      })
      .then((err) => {
        console.log(err);
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
          className={styles.hos}
        />
      ))}
    </div>
  );

  const addHospitalHandler = async () => {
    const data = {
      ethAddress: hospitalAddress,
      email: email,
      hospitalName: hospitalName,
      city: hospitalCity,
      state: state,
    };

    console.log(data);

    axios
      .post(
        "https://dodonate-backend.herokuapp.com/admin/registerHospital",
        data
      )
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem("hospitalId", res.data.hospitalId);
        // localStorage.setItem("token", res.data.token);
        // dispatch({ type: "loginhos" });
      })
      .then((err) => {
        console.log(err);
      });

    const accounts = await web3.eth.getAccounts();

    await Manager.methods
      .addHospitals(hospitalAddress, hospitalName, hospitalCity)
      .send({
        from: accounts[0],
      });
  };

  return (
    <EachPage>
      <div className={styles.box}>
        <div className={styles.bar}>
          <p>Add a Hospital</p>
        </div>
        <div className={styles.other}>
          <div className={styles.div}>
            <h1>Add a New Donor</h1>
            <p>Personal Information</p>
            <ul className={styles.ul}>
              <li>
                <div className={styles.icon}>
                  <FaMailBulk />
                </div>
                <div>Email</div>
              </li>
              <li>
                <div className={styles.icon}>
                  <MdAccountBalance />
                </div>
                <div>ETH Account</div>
              </li>
              <li className={styles.li}>
                <div className={styles.icon}>
                  <FaHospital />
                </div>
                <div>Name</div>
              </li>

              <li>
                <div className={styles.icon}>
                  <BiCurrentLocation />
                </div>
                <div>Location</div>
              </li>

              <li>
                <div className={styles.icon}>
                  <FaGlobeAfrica />
                </div>
                <div>City And State</div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.form}>
          <label htmlFor="aadhar">Hospital Email</label>
          <input
            placeholder="Hospital Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="aadhar">Hospital ETH Account</label>
          <input
            placeholder="Hospital Ethereum acc. address"
            onChange={(event) => setHospitalAddress(event.target.value)}
          />
          <label htmlFor="aadhar">Hospital Name</label>
          <input
            placeholder="Hospital Name"
            value={hospitalName}
            onChange={(event) => setHospitalName(event.target.value)}
          />
          <label htmlFor="aadhar">City</label>
          <input
            placeholder="Hospital City"
            value={hospitalCity}
            onChange={(event) => setHospitalCity(event.target.value)}
          />
          <label htmlFor="aadhar">State</label>
          <input
            placeholder="Hospital State"
            onChange={(event) => setState(event.target.value)}
          />
          <label htmlFor="aadhar">Map Location</label>
          <input
            placeholder="Location"
            // onChange={(event) => setState(event.target.value)}
          />

          <button onClick={addHospitalHandler} className={styles.button}>
            CREATE
          </button>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.bar}>
          <p>List of Hospitals </p>
        </div>
        {hospitalsArray}
      </div>
    </EachPage>
  );
};

export default AdminHospital;
