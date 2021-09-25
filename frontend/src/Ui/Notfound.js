import React from "react";
import EachPage from "./EachPage";
import img from "../components/Image/error404.png";
import styles from "./Notfound.module.css";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <EachPage>
      <div className={styles.center}>
        <h1>Page Not found</h1> <img src={img} alt="Not found" />
        <Link to="/home" className="link">
          Home
        </Link>
      </div>
    </EachPage>
  );
};

export default Notfound;
