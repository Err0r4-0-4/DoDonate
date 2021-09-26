import React, { useState } from "react";
import axios from "axios";
import styles from "./Loginhos.module.css";
import { BsFillExclamationCircleFill } from "react-icons/bs";
//import Spinner from "../Ui/Spinner";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Spinner from "../../Ui/Spinner";

const Loginhos = () => {
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const dispatch = useDispatch();

  const [keystroke, keystrikeSet] = useState("");
  const [invalidstate, setinvalidstate] = useState(false);
  const [touched, Settouched] = useState(false);
  const [showSpinner, setshowSpinner] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [err, setErr] = useState(false);
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
      // dispatch({ type: "loginhos" });
      Settouched(true);
    if (keystroke.trim().length === 0) {
      setinvalidstate(true);
    }
    if (!invalidstate) {
      keystrikeSet("");
    }

    Settouched3(true);
    if (keystroke3.trim().length === 0) {
      setinvalidstate3(true);
    }
    if (!invalidstate) {
      keystrikeSet3("");
    }

    const data = {
      email: keystroke.trim(),
      password: keystroke3.trim(),
    };

    console.log(data);

    axios
      .post("https://dodonate-backend.herokuapp.com/hospital/login", data)
      .then((res) => {
        console.log(res.data.hospitalId);
        localStorage.setItem("hospitalId", res.data.hospitalId);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("type", "hospital");
        dispatch({ type: "loginhos" });
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

      {isAuth ? <Redirect to="/hospital/home" /> : null}
      {/* {isAuth ? <Redirect to="creatorProfile" /> : null}
      {showSpinner ? <Spinner /> : null} */}
      <div className={styles.feildset}>
        <input
          type="text"
          placeholder="Hospital I.D.(jatingupta0214@gmail.com)"
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

      <div className={styles.feildset}>
        <input
          type="password"
          placeholder="Password: 0a7s2wpz"
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
        onClick={formsubmission}
      >
        LOGIN AS HOSPITAL STAFF
      </button>
      <div className={styles.anchor}>
        <a href="#">Error Encountered</a>
        <a href="#">Forgot Password ?</a>
      </div>
    </form>
  );
};

export default Loginhos;
