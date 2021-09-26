import React, { useState, useEffect } from "react";
import Donor from "../../ethereum/donor";
import Manager from "../../ethereum/manager";
import web3 from "../../ethereum/web3";
import Spinner from "../../Ui/Spinner";
import axios from "axios";

import styles from "./Form2.module.css";
import cx from "classnames";
const Form2 = () => {
  const [Aadhaar, setAadhaar] = useState("");
  const [units, setUnits] = useState("");
  const [group, setGroup] = useState("");

  const [loading, setLoading] = useState(false);

  const donateHandler = async (event) => {
    event.preventDefault();

    setLoading(true);

    const accounts = await web3.eth.getAccounts();

    const address = await Manager.methods.getDonor(Aadhaar).call({
      from: accounts[0],
    });

    const donor = Donor(address);

    const date = await donor.methods.date().call();

    console.log(date);
    console.log(Date.now() / 3600000);

    try{

      if (date <= Date.now() / 3600000) {
        console.log("true");
        await donor.methods.donate().send({
          from: accounts[0],
        });


        const data = {
          hospitalId: localStorage.getItem("hospitalId"),
          aadharNo: Aadhaar,
          unit: units,
          bgroup: group,
        };
    
        axios
          .post(
            "https://dodonate-backend.herokuapp.com/hospital/addPatientData",
            data
          )
          .then((res) => {
            console.log(res);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            window.alert(err);
          });

      }

      else{
        console.log("err");
        throw "not eligible at the moment!!!";
        setLoading(false);
      }

    }catch(e){
      console.log(e);
      setLoading(false);
      window.alert(e);
    }

   

    

    const balance = await donor.methods.balance().call();

    console.log(balance);
  };

  return (
    <form className={styles.form} onSubmit={donateHandler}>

      {loading ? <Spinner/> : false}

      <div className={styles.hundred}>
        <label htmlFor="aadhar">Aadhar Number</label>

        <input
          type="text"
          id="aadhar"
          placeholder="Aadhar Number (12-digit)"
          onChange={(event) => setAadhaar(event.target.value)}
        />

        <label htmlFor="unit">Units of Blood</label>
        <input
          type="text"
          id="unit"
          placeholder="Units of Blood"
          onChange={(event) => setUnits(event.target.value)}
        />

        <label htmlFor="group">Blood Group</label>
        <input
          type="text"
          id="group"
          placeholder="Blood Group"
          onChange={(event) => setGroup(event.target.value)}
        />
      </div>

      <button className={styles.button}>Donate</button>
    </form>
  );
};

export default Form2;
