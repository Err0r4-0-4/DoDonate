import React, { useState, useEffect } from "react";
import web3 from "../../ethereum/web3";

import Manager from "../../ethereum/manager";
import Donor from "../../ethereum/donor";

import styles from './Admin.module.css';

const Admin = React.memo((props) => {
  const [aadhaar, setAadhaar] = useState("");

  const [inputAadhaar, setInputAadhaar] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputSex, setInputSex] = useState("");

  const [hospitalAddress, setHospitalAddress] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalCity, setHospitalCity] = useState("");

  useEffect(async () => {
    const accounts = await web3.eth.getAccounts();

    const count = await Manager.methods.hospitalCount().call();
    let addresses = [];
    let names = [];
    let cities = [];

    for (let i = 0; i < count; i++) {
      addresses.push(await Manager.methods.hospitalAddress(i).call());
      names.push(await Manager.methods.hospitalName(i).call());
      cities.push(await Manager.methods.hospitalCity(i).call());
    }

    console.log(addresses); //hospital
    console.log(names);
    console.log(cities);

    console.log(count);
  }, []);

  const donateHandler = async () => {
    const accounts = await web3.eth.getAccounts();
    const address = await Manager.methods.getDonor(aadhaar).call({
      from: accounts[0],
    });

    const donor = Donor(address);

    const date = await donor.methods.date().call();

    console.log(date);
    console.log(Date.now() / 3600000);

    if (date <= Date.now() / 3600000) {
      console.log("true");
      await donor.methods.donate().send({
        from: accounts[0],
      });
    }

    const balance = await donor.methods.balance().call();

    console.log(balance);
  };

  const createDonorHandler = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log(accounts[0]);

    await Manager.methods
      .createDonor(inputAadhaar, inputName, inputAge, true)
      .send({
        from: accounts[0],
      });
  };

  const addHospitalHandler = async () => {
    const accounts = await web3.eth.getAccounts();

    await Manager.methods
      .addHospitals(hospitalAddress, hospitalName, hospitalCity)
      .send({
        from: accounts[0],
      });
  };

  return (
    <div className={styles.box}>
      <input
        placeholder="aadhaar number"
        value={aadhaar}
        onChange={(event) => setAadhaar(event.target.value)}
      />

      <button onClick={donateHandler}>Donate</button>

      <br />
      <br />
      <hr />

      <input
        placeholder="aadhaar number"
        value={inputAadhaar}
        onChange={(event) => setInputAadhaar(event.target.value)}
      />

      <input
        placeholder="name"
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
      />

      <input
        placeholder="age"
        value={inputAge}
        onChange={(event) => setInputAge(event.target.value)}
      />

      <button onClick={createDonorHandler}>CREATE</button>

      <br></br>
      <br></br>
      <hr></hr>

      <input
        placeholder="hospital address"
        value={hospitalAddress}
        onChange={(event) => setHospitalAddress(event.target.value)}
      />

      <input
        placeholder="hospital name"
        value={hospitalName}
        onChange={(event) => setHospitalName(event.target.value)}
      />

      <input
        placeholder="hospital city"
        value={hospitalCity}
        onChange={(event) => setHospitalCity(event.target.value)}
      />

      <button onClick={addHospitalHandler}>CREATE</button>
    </div>
  );
});

export default Admin;
