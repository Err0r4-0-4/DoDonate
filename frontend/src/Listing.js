import React from "react";
import styles from "./Listing.module.css";
const Listing = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const clickHandler1 = (e) => {
    setOpen1(!open1);
    // setOpen2(false);
    // setOpen3(false);
    // setOpen4(false);
  };
  const clickHandler2 = (e) => {
    setOpen2(!open2);
  };
  const clickHandler3 = (e) => {
    setOpen3(!open3);
  };
  const clickHandler4 = (e) => {
    // let a = e.target.parentNode.getAttribute("id");
    //  console.log(a);
    setOpen4(!open4);
  };
  return (
    <div>
      <ul className={styles.ul}>
        <li className={styles.line} id="1">
          This 1{" "}
          <button className={styles.add} onClick={clickHandler1}>
            {" "}
            +{" "}
          </button>
          <p className={open1 ? styles.textopen : styles.text}>
            Text for line 1
          </p>
        </li>
        <li className={styles.line} id="2">
          This 2{" "}
          <button className={styles.add} onClick={clickHandler2}>
            {" "}
            +{" "}
          </button>
          <p className={open2 ? styles.textopen : styles.text}>
            Text for line 2
          </p>
        </li>
        <li className={styles.line} id="3">
          This 3{" "}
          <button className={styles.add} onClick={clickHandler3}>
            {" "}
            +{" "}
          </button>
          <p className={open3 ? styles.textopen : styles.text}>
            Text for line 3
          </p>
        </li>
        <li className={styles.line} id="4">
          This 4{" "}
          <button className={styles.add} onClick={clickHandler4}>
            +
          </button>
          <p className={open4 ? styles.textopen : styles.text}>
            Text for line 4
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Listing;
