import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import instagram from "../../assets/instagram.svg"
import whatsapp from "../../assets/whatsapp.svg"

function Footer() {
  return (
    <footer className="globalContainer">
      <div className={styles.footerStyle}>
        <h2 className={styles.footerTitle}>Contact</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <p>Phone</p>
            <Link to="tel:+493091588492">+49 30 915-88492</Link>
          </div>
          <div className={styles.gridItem}>
            <p>Socials</p>
            <div className={styles.iconsContainer}>
              <Link className={styles.svg_link} to='https://www.instagram.com/' target="_blank"><img src={instagram} alt="instagram" />
              </Link>
              <Link className={styles.svg_link} to='https://web.whatsapp.com/' target="_blank"><img src={whatsapp} alt="whatsapp" />
              </Link>
            </div>
          </div>
          <div className={styles.gridItem}>
            <p>Address</p>
            <address>Wallstraße 9-13, 10179 Berlin, Deutschland</address>
          </div>
          <div className={styles.gridItem}>
            <p>Working Hours</p>
            <p>24 hours a day</p>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.826268337366!2d13.414859276739949!3d52.51314577981495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e56fa34a65%3A0x80b6a3f172a2270b!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1622039898429!5m2!1sen!2sus&zoom=15&disableDefaultUI=true&scrollwheel=false"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
