import React, { useState, useEffect } from "react";
import Manager from '../../ethereum/manager'
import web3 from "../../ethereum/web3";
import styles from "./Form.module.css";
import cx from "classnames";
import axios from "axios";
import Spinner from "../../Ui/Spinner";

const Form = () => {

  const [inputAadhaar, setInputAadhaar] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputSex, setInputSex] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputState, setInputState] = useState("");
  const [inputMobile, setInputMobile] = useState("");

  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState({});

  const createDonorHandler = async (event) => {

    event.preventDefault();

    setLoading(true);

    const accounts = await web3.eth.getAccounts();

    console.log(accounts[0]);

    await Manager.methods
      .createDonor(inputAadhaar, inputName, inputAge, true, inputCity, inputState, inputMobile)
      .send({
        from: accounts[0],
      });

      const data = {
        aadharNo : inputAadhaar,
        name: inputName,
        city: inputCity,
        state: inputState,
        age: inputAge,
        bgroup: "A+",
        gender: true,
        phoneNo: inputMobile
      };

      console.log(file);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("aadharNo", inputAadhaar);
      formData.append("name", inputName);
      formData.append("city", inputCity);
      formData.append("state", inputState);
      formData.append("age", inputAge);
      formData.append("bgroup", "A+");
      formData.append("gender", true);
      formData.append("phoneNo", inputMobile);

      console.log(data);

      axios.post("https://dodonate-backend.herokuapp.com/user/signup", formData)
      .then((res) => {
      console.log(res);
      // dispatch({ type: "loginhos" });
      setLoading(false);
      
    })
    .catch((err) => {
      console.log(err.message);
      setLoading(false);
    });
  };


  return (
    <form className={styles.form} onSubmit={createDonorHandler}>

      {loading ? <Spinner/> : null}

      <div className={styles.fifty}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Name" 
         onChange={(event) => setInputName(event.target.value)}/>
      </div>

      <div className={styles.fifty}>
        <label htmlFor="tele">Mobile Number</label>
        <input type="text" id="tele" placeholder="Mobile Number" 
         onChange={(event) => setInputMobile(event.target.value)}/>
      </div>

      <div className={styles.fifty}>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" placeholder="Age" 
         onChange={(event) => setInputAge(event.target.value)}/>
      </div>

      <div className={cx(styles.fifty, styles.radio)}>
        <label htmlFor="sex" className={styles.radiolabel}>
          Sex
        </label>
        <input type="radio" id="male" name="sex" value="Male" />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="sex" value="Female" />
        <label htmlFor="female">Female</label>
        <input type="radio" id="other" name="sex" value="Other" />
        <label htmlFor="other">Other</label>
      </div>

      <div className={styles.hundred}>
        <label htmlFor="taadhar">Aadhar Number</label>
        <input type="text" id="aadhar" placeholder="Aadhar Number (12-digit)" 
         onChange={(event) => setInputAadhaar(event.target.value)}/>
      </div>

      <div className={styles.fifty}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" placeholder="City" 
         onChange={(event) => setInputCity(event.target.value)}/>
      </div>

      <div className={styles.fifty}>
        <label htmlFor="state">State</label>
        <input type="text" id="state" placeholder="State" 
         onChange={(event) => setInputState(event.target.value)}/>
      </div>

      <input
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
          style={{ width: "100%", margin: "20px 0", border: "1px solid #ccc" }}
        />

      <button className={styles.button} 
      onClick={createDonorHandler}>Add</button>
    </form>
  );
};

export default Form;
