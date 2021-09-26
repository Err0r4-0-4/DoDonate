import React, { useState, useEffect } from "react";
import web3 from "../../ethereum/web3";

import Manager from "../../ethereum/manager";
import Donor from "../../ethereum/donor";
import Hospital from "../Cards/Hospitals/Hospital";
import EachPage from "../../Ui/EachPage";

import styles from "./List.module.css";


const List = () => {

  const [hospitalAddress, setHospitalAddress] = useState([]);
  const [hospitalName, setHospitalName] = useState([]);
  const [hospitalCity, setHospitalCity] = useState([]);
  const [hospitals, setHospitals] = useState([]);

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

    setHospitals(addresses);
  
    console.log(count);
  }, []);

  const addHospitalHandler = async () => {
    const accounts = await web3.eth.getAccounts();

    await Manager.methods
      .addHospitals(hospitalAddress, hospitalName, hospitalCity)
      .send({
        from: accounts[0],
      });
  };

  let hospitalsArray = (
    <div >
      {hospitals.map((hospital) => (
        <Hospital/>
      ))}
    </div>
  );

  return (
    <EachPage>
      <div>
      <h1>List</h1>

      <input
        placeholder="hospital address"
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

      {hospitalsArray}
    </div>
    </EachPage>
    
  );
};

export default List;
