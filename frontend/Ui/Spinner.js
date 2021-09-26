import React from "react";
import styles from "./Spinner.module.css";
import Backdrop from './Backdrop'

const Spinner = (props) => {
  return(
      <div>
          <Backdrop show={true}/>
          <div class={styles.spinner}>
            <div class={styles.double_bounce1}></div>
            <div class={styles.double_bounce2}></div>
    </div>
      </div>
    
  );
};

export default Spinner;
