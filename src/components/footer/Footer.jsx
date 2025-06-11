"use client";

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
import { useRouter, usePathname } from "next/navigation";

const Footer = () => {
  const date = new Date().getFullYear();

  const { servicesRef, aboutRef, contactRef, scrollTo } =
    useContext(ScrollContext);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (refName) => {
    const ref =
      refName === "home"
        ? homeRef
        : refName === "services"
        ? servicesRef
        : refName === "about"
        ? aboutRef
        : contactRef;

    if (pathname === "/") {
      scrollTo(ref);
    } else {
      router.push(`/?section=${refName}`);
    }
  };

  return (
    <motion.div
      initial={{ transform: "translateY(50%)", filter: "blur(5px)" }}
      whileInView={{ transform: "translateY(0)", filter: "blur(0)" }}
      viewport={{ once: true }}
      className={`${styles.container} ${poppins.className}`}
    >
      <div className={styles.footerLinks}>
        <ul>
          <a onClick={() => handleClick("about")}>
            <li>About Us</li>
          </a>
          <a onClick={() => handleClick("services")}>
            <li>Services</li>
          </a>
          <a onClick={() => handleClick("contact")}>
            <li>Contact Us</li>
          </a>
          <a href="/terms-and-conditions">
            <li>Terms & Conditions</li>
          </a>
          <a href="/privacy-policy">
            <li>Privacy Policy</li>
          </a>
        </ul>
      </div>

      <div className={styles.copyright}>
        <p>Copyright ©️ {date} Maschtek. All Rights Reserved.</p>
        <div className={styles.socials}>
          <FaSquareFacebook className={styles.icon} size={20} />
          <FaInstagram className={styles.icon} size={20} />
          <FaLinkedin className={styles.icon} size={20} />
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
