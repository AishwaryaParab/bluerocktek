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

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className={`${styles.container} ${poppins.className}`}>
      <div className={styles.contactDetails}>
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
      </div>

      <div className={styles.copyright}>
        <p>Copyright ©️ {date} BlueRockTek. All Rights Reserved.</p>
        <div className={styles.socials}>
          <FaSquareFacebook size={20} />
          <FaInstagram size={20} />
          <FaLinkedin size={20} />
        </div>
      </div>
    </div>
  )
}

export default Footer