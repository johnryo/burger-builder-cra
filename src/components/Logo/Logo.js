import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const logo = (props) => (
  <div className={styles.logo}>
    <img src={burgerLogo} alt="logo" />
  </div>
);

export default logo;