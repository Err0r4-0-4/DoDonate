import React, { useState, useEffect } from "react";
import web3 from "../../ethereum/web3";

import Manager from "../../ethereum/manager";
import Donor from "../../ethereum/donor";
import EachPage from "../../Ui/EachPage";
import styles from "./User.module.css";
import { FaRupeeSign } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";
import { CgGenderMale } from "react-icons/cg";
import { GiGroupedDrops } from "react-icons/gi";
const User = () => {
  const [values, setValues] = useState({
    balance: "",
    name: "",
    age: "",
    sex: "",
    mobile: "",
    city: "",
    state: "",
  });

  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  let manager;

  useEffect(async () => {
    const accounts = await web3.eth.getAccounts();

    const aadhar = "aaa";

    const donorAddress = await Manager.methods.getDonor(aadhar).call({
      from: accounts[0],
    });

    const donor = await Donor(donorAddress);

    const balance = await donor.methods.balance().call({
      from: accounts[0],
    });

    const name = await donor.methods.name().call({
      from: accounts[0],
    });

    const age = await donor.methods.age().call({
      from: accounts[0],
    });

    const sex = await donor.methods.sex().call({
      from: accounts[0],
    });

    const mobile = await donor.methods.mobile().call({
      from: accounts[0],
    });

    const city = await donor.methods.city().call({
      from: accounts[0],
    });

    const state = await donor.methods.state().call({
      from: accounts[0],
    });

    setValues({ balance, name, age, sex, mobile, city, state });

    console.log(values);
  }, []);

  const transferHandler = async () => {
    console.log("reached");

    const donor = Donor("0x5Cf12D40eeaea3522F68b627765a45960FdD97de");

    const accounts = await web3.eth.getAccounts();

    if (values.balance >= amount * 1000000000000000000) {
      await Manager.methods
        .transfer(address, amount * 1000000000000000000)
        .send({
          from: accounts[0],
        });

      await donor.methods.transfer(amount * 1000000000000000000).send({
        from: accounts[0],
      });
    }
  };

  return (
    <EachPage>
      <div>
        <div>
          {values.balance}
          {values.name}
          {values.age}
          {values.sex}
          {values.mobile}
          {values.city}
          {values.state}
        </div>
        <div className={styles.box}>
          <div className={styles.bar}>
            <p>Payment</p>
          </div>
          <div className={styles.other}>
            <div className={styles.div}>
              <p>Payment for facilities</p>
              <ul className={styles.ul}>
                <li>
                  <div className={styles.icon}>
                    <FaRupeeSign />
                  </div>
                  <div>Amount</div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <RiSendPlane2Fill />
                  </div>
                  <div>Send to</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.form}>
            <label htmlFor="unit">Amount</label>
            <input
              type="text"
              placeholder="Amount"
              onChange={(event) => setAmount(event.target.value)}
            ></input>
            <label htmlFor="unit">Sender's I.D.</label>
            <input
              type="text"
              placeholder="Sender's Account"
              onChange={(event) => setAddress(event.target.value)}
            ></input>
            <button onClick={transferHandler} className={styles.button}>
              Send
            </button>
          </div>
        </div>
      </div>
    </EachPage>
  );
};

export default User;
