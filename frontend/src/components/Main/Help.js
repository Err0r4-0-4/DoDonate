import React, { useState } from "react";
import styles from "./Help.module.css";
import { AiOutlineDown } from "react-icons/ai";
import EachPage from "../../Ui/EachPage";
const Help = () => {
  const [prob, setprob] = useState(false);
  const probf = () => {
    setprob(!prob);
  };

  const [sol, setsol] = useState(false);
  const solf = () => {
    setsol(!sol);
  };

  const [bc, setbc] = useState(false);
  const bcf = () => {
    setbc(!bc);
  };
  const [link, setlink] = useState(false);
  const linkf = () => {
    setlink(!link);
  };
  const [help1, sethelp1] = useState(false);
  const open1 = () => {
    sethelp1(!help1);
  };
  const [help2, sethelp2] = useState(false);
  const open2 = () => {
    sethelp2(!help2);
  };
  return (
    <EachPage>
      <div className={styles.big}>
        <div className={styles.small} onClick={probf}>
          <div className={styles.heading}>Problem</div>
          <div className={prob ? styles.up : styles.add}>
            <AiOutlineDown />
          </div>
        </div>
        <div className={prob ? styles.openans : styles.closeans}>
          India, with its population of 1.2 billion people, needs 12 million
          units of blood annually but collects only 9 million - a 25% deficit.
          Blood donation in India dropped 30% after government prohibited
          getting patient paid for donation of blood and also due to covid Blood
          banks in India have already been facing an acute shortage due to
          increased demand and low donors, and the entire shortfall comes to
          over a million units.
        </div>
      </div>

      <div className={styles.big}>
        <div className={styles.small} onClick={solf}>
          <div className={styles.heading}>Solution</div>
          <div className={sol ? styles.up : styles.add}>
            <AiOutlineDown />
          </div>
        </div>
        <div className={sol ? styles.openans : styles.closeans}>
          Solution we came with is a Blockchain Based Web Application which aims
          to solve the above problem. By using our application user can select
          hospital on which they want to donate blood and in return user will
          get some ethers in their account.{" "}
          <b>
            But, user can only spend those ethers only for healt treatment
            purpose in only those hospitals which are registered on our website
          </b>
          . They can not able spend those ethers anywhere else.
        </div>
      </div>

      <div className={styles.big}>
        <div className={styles.small} onClick={bcf}>
          <div className={styles.heading}>Why BlockChain ?</div>
          <div className={bc ? styles.up : styles.add}>
            <AiOutlineDown />
          </div>
        </div>
        <div className={bc ? styles.openans : styles.closeans}>
          The fact that blockchain is a decentralised way of storing and
          accessing data makes the whole system incredibly secure – because,
          unlike a centralised database, there's no one single point of entry.
          This makes it particularly useful for recording transactions in a
          secure manner. And no centralised control
        </div>
      </div>

      <div className={styles.big}>
        <div className={styles.small} onClick={linkf}>
          <div className={styles.heading}>Links</div>
          <div className={link ? styles.up : styles.add}>
            <AiOutlineDown />
          </div>
        </div>
        <div className={link ? styles.openans : styles.closeans}>
          <a href="#">PROBLEMS</a>
          <a href="#">GITHUB</a>
          <a href="#">HOSTED</a>
        </div>
      </div>

      <div className={styles.faq}>
        <div className={styles.heading}>FAQ's</div>
        <div className={styles.help} onClick={open1}>
          <div className={styles.faqques}>
            Why should we use this website ?{" "}
          </div>
          <div className={help1 ? styles.up : styles.add}>
            <AiOutlineDown />
          </div>
          <div className={help1 ? styles.open : styles.close}>
            This web app is secure and uses block chain so the stored data
            cannot be tampered and if tampered will result in discloure of ssuch
            activities
          </div>
        </div>

        <div className={styles.help} onClick={open2}>
          <div className={styles.faqques}>How should I register ? </div>
          <div className={help2 ? styles.up : styles.add}>
            <AiOutlineDown />
          </div>
          <div className={help2 ? styles.open : styles.close}>
            One person can register using portal available at your nearest
            hospital which is enrolled in this scheme.
          </div>
        </div>
      </div>
    </EachPage>
  );
};

export default Help;
