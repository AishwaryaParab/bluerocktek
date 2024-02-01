"use client"

import Image from "next/image"
import styles from "./navbar.module.css"
import logo from "../../../public/logo.png"
import { poppins } from "@/utils/fonts"
import { useContext } from "react"
import { ScrollContext } from "@/context/ScrollContext"
import { motion } from "framer-motion"
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const {servicesRef, aboutRef, contactRef, scrollTo} = useContext(ScrollContext);

  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
            <motion.div initial="hidden" animate="visible" variants={{hidden: {transform: "translateX(-100%)", filter: "blur(5px)"}, visible: {transform: "translateX(0)", filter: "blur(0)"}}} className={styles.logo}>
                <Image className={styles.logoImg} src={logo} width={260} height={48} />
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={{hidden: {transform: "translateX(100%)", filter: "blur(5px)"}, visible: {transform: "translateX(0)", filter: "blur(0)"}}} className={`${styles.links} ${poppins.className}`}>
                <ul>
                    <a><li>Home</li></a>
                    <a onClick={() => {scrollTo(servicesRef)}}><li>Services</li></a>
                    <a onClick={() => {scrollTo(aboutRef)}}><li>About Us</li></a>
                    <a onClick={() => {scrollTo(contactRef)}}><li>Contact Us</li></a>
                </ul>
            </motion.div>

            <div className={styles.hamburgerIcon}>
                <RxHamburgerMenu size={24} />
            </div>
        </div>
    </div>
  )
}

export default Navbar