"use client"

import styles from "./contact.module.css";
import Image from "next/image";
import logo from "../../../public/logo.png";
import contact from "../../../public/contact.png";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { poppins } from "@/utils/fonts";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../button/Button";
import { useContext } from "react";
import { ScrollContext } from "@/context/ScrollContext";
import { motion } from "framer-motion";

const Contact = () => {
  const {contactRef} = useContext(ScrollContext);

  return (
    <div ref={contactRef} className={styles.container}>
        <h2 className={`${styles.title} ${poppins.className}`}>Contact Us</h2>
        <div className={styles.contactDetails}>
            <motion.div initial={{transform: "translateX(-100%)", filter: "blur(5px)"}} whileInView={{transform: "translateX(0)", filter: "blur(0)"}} viewport={{once: true}} className={styles.contactForm}>
                <form>
                    <label className={styles.label}>Your name</label>
                    <input className={`${styles.input} ${poppins.className}`} type="text" placeholder="Enter your name" required />

                    <label className={styles.label}>Your email</label>
                    <input className={`${styles.input} ${poppins.className}`} type="email" placeholder="Enter your email" required />

                    <label className={styles.label}>Subject</label>
                    <input className={`${styles.input} ${poppins.className}`} type="text" placeholder="Enter the subject" required />

                    <label className={styles.label}>Your message (optional)</label>
                    <textarea className={`${styles.input} ${poppins.className}`} rows={18} cols={18} type="text" placeholder="Enter your message" />

                    {/* <button type="submit">Submit</button> */}
                    <Button label="Submit" type="submit" />
                </form>
            </motion.div>

            <motion.div initial={{transform: "translateX(100%)", filter: "blur(5px)"}} whileInView={{transform: "translateX(0)", filter: "blur(0)"}} viewport={{once: true}} className={styles.details}>
                {/* <Image src={logo} width={200} height={80} /> */}
                <Image className={styles.contactImg} src={contact} width={500} height={500} />

                <div className="address">
                    <div className={`${styles.detail} ${poppins.className}`}>
                        <FaLocationDot className={styles.icon} size={32} color="#02CECB" />
                        <p>1012/71, Zos Waddo, Porvorim, North Goa, Goa, PIN - 403501</p>
                    </div>

                    <div className={styles.detail}>
                        <FaPhone className={styles.icon}  size={32} color="#02CECB" />
                        <p>+91 9764680131</p>
                    </div>

                    <div className={styles.detail}>
                        <IoMail className={styles.icon}  size={32} color="#02CECB" />
                        <p>engineering@bluerocktek.in</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact