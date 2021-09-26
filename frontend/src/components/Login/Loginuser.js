import React, { useState } from "react";
import styles from "./Loginuser.module.css";
//import axios from "axios";
import { BsFillExclamationCircleFill } from "react-icons/bs";
//import Spinner from "../Ui/Spinner";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Spinner from "../../Ui/Spinner";
import { AiFillWindows } from "react-icons/ai";

const Loginuser = () => {
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const dispatch = useDispatch();

  const [keystroke, keystrikeSet] = useState("");
  const [invalidstate, setinvalidstate] = useState(false);
  const [touched, Settouched] = useState(false);
  const [showSpinner, setshowSpinner] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const changedevent = (e) => {
    keystrikeSet(e.target.value);
    Settouched(false);
  };

  const blurevent = () => {
    Settouched(true);
    if (keystroke.trim().length === 0) {
      setinvalidstate(true);
    } else setinvalidstate(false);
  };

  const [keystroke3, keystrikeSet3] = useState("");
  const [invalidstate3, setinvalidstate3] = useState(false);
  const [touched3, Settouched3] = useState(false);

  const changedevent3 = (e) => {
    keystrikeSet3(e.target.value);
    Settouched3(false);
  };

  const blurevent3 = () => {
    Settouched3(true);
    if (keystroke3.trim().length === 0) {
      setinvalidstate3(true);
    } else setinvalidstate3(false);
  };

  const formsubmission = (e) => {
    e.preventDefault();

    setLoading(true);

    if (keystroke3.trim().length > 4 && keystroke.trim().length > 3)
      // dispatch({ type: "loginadmin" });
      Settouched(true);
    if (keystroke.trim().length === 0) {
      setinvalidstate(true);
    }
    if (!invalidstate) {
      console.log(keystroke);
      keystrikeSet("");
    }

    Settouched3(true);
    if (keystroke3.trim().length === 0) {
      setinvalidstate3(true);
    }
    if (!invalidstate) {
      console.log(keystroke3);
      keystrikeSet3("");
    }

    const data = {
      aadharNo: keystroke,
      password: keystroke3,
    };

    console.log(data);

    axios
      .post("https://dodonate-backend.herokuapp.com/user/login", data)
      .then((res) => {
        console.log(res);
        dispatch({ type: "loginuser" });
        localStorage.setItem("aadhaar", res.data.aadharNo);
        localStorage.setItem("url", res.data.fileUrl);
        localStorage.setItem("type", "user");

        setLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        window.alert("unable to login");
      });
  };

  const isInvalid = touched && invalidstate;
  //   const isInvalid2 = touched2 && invalidstate2;
  const isInvalid3 = touched3 && invalidstate3;

  return (
    <form className={styles.form} onSubmit={formsubmission}>
      {loading ? <Spinner /> : null}
      {/* {showSpinner ? <Spinner /> : null}
      {isAuth ? <Redirect to="home" /> : null} */}
      <div className={styles.feildset}>
        <input
          type="text"
          placeholder="Aadhar Number: 111111111111"
          value={keystroke}
          className={isInvalid ? styles.error : styles.feild}
          onChange={changedevent}
          onBlur={blurevent}
        />
        {isInvalid && (
          <p className={styles.error2}>
            <BsFillExclamationCircleFill />
          </p>
        )}
      </div>
      {/* <div className={styles.feildset}>
            <input
              type="text"
              placeholder="PIN Code"
              value={keystroke2}
              className={isInvalid2 ? styles.error : styles.feild}
              onChange={changedevent2}
              onBlur={blurevent2}
            />
            {isInvalid2 && (
              <p className={styles.error2}>
                <BsFillExclamationCircleFill />
              </p>
            )}
          </div> */}
      <div className={styles.feildset}>
        <input
          type="password"
          placeholder="Password: y3uo7ec1"
          value={keystroke3}
          className={isInvalid3 ? styles.error : styles.feild}
          onChange={changedevent3}
          onBlur={blurevent3}
        />
        {isInvalid3 && (
          <p className={styles.error2}>
            <BsFillExclamationCircleFill />
          </p>
        )}
      </div>
      <button
        className={isInvalid || isInvalid3 ? styles.buttonred : styles.button}
      >
        LOGIN AS USER
      </button>
      <div className={styles.anchor}>
        <a href="#">Error Encountered</a>
        <a href="#">Forgot Password ?</a>
      </div>
    </form>
  );
};

export default Loginuser;
