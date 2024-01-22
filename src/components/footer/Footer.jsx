"use client"

import Image from "next/image";
import styles from "./footer.module.css";
import logo from "../../../public/logo.png";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { poppins } from "@/utils/fonts";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useContext } from "react";
import { ScrollContext } from "@/context/ScrollContext";
import { motion } from "framer-motion";

const Footer = () => {
  const date = new Date().getFullYear();

  const {servicesRef, aboutRef, contactRef, scrollTo} = useContext(ScrollContext);

  return (
    <motion.div initial={{transform: "translateY(50%)", filter: "blur(5px)"}} whileInView={{transform: "translateY(0)", filter: "blur(0)"}} viewport={{once: true}} className={`${styles.container} ${poppins.className}`}>
      {/* <div className={styles.contactDetails}>
        <div className={styles.details}>
          <Image src={logo} width={200} height={80} />

          <div className={styles.detail}>
            <FaLocationDot />
            <p>Police housing society, Porvorim, North Goa India. PIN - 403501</p>
          </div>

          <div className={styles.detail}>
            <FaPhone />
            <p>+91 22 2222 2222</p>
          </div>

          <div className={styles.detail}>
            <IoMail />
            <p>sagarredkar@gmail.com</p>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linksSet}>
            <p className={styles.setTitle}>Sales & Support</p>
            <ul className={styles.links}>
              <li><a>Contact Us</a></li>
              <li><a>Get a Quote</a></li>
              <li><a>Terms & Conditions</a></li>
              <li><a>Privacy Policy</a></li>
            </ul>
          </div>

          <div className={styles.linksSet}>
            <p className={styles.setTitle}>Sales & Support</p>
            <ul className={styles.links}>
              <li><a>Contact Us</a></li>
              <li><a>Get a Quote</a></li>
              <li><a>Terms & Conditions</a></li>
              <li><a>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className={styles.footerLinks}>
        <ul>
          <a onClick={() => {scrollTo(aboutRef)}}><li>About Us</li></a>
          <a onClick={() => {scrollTo(servicesRef)}}><li>Services</li></a>
          <a onClick={() => {scrollTo(contactRef)}}><li>Contact Us</li></a>
          <a><li>Terms & Conditions</li></a>
          <a><li>Privacy Policy</li></a>
        </ul>
      </div>

      <div className={styles.copyright}>
        <p>Copyright ©️ {date} BlueRockTek. All Rights Reserved.</p>
        <div className={styles.socials}>
          <FaSquareFacebook className={styles.icon} size={20} />
          <FaInstagram className={styles.icon} size={20} />
          <FaLinkedin className={styles.icon} size={20} />
        </div>
      </div>
    </motion.div>
  )
}

export default Footer