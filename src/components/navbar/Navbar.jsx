"use client"

import Image from "next/image"
import styles from "./navbar.module.css"
import logo from "../../../public/logo.png"
import { poppins } from "@/utils/fonts"
import { useContext, useEffect, useState } from "react"
import { ScrollContext } from "@/context/ScrollContext"
import { motion } from "framer-motion"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const {homeRef, servicesRef, aboutRef, contactRef, scrollTo} = useContext(ScrollContext);
  const [isOpen, setIsOpen] = useState(false);
//   const [header, setHeader] = useState(false);

//   useEffect(() => {
//     const changeBg = () => {
//         if(window.scrollY >= 92) {
//             setHeader(true);
//         } else {
//             setHeader(false);
//         }
//     }

//     window.addEventListener('scroll', changeBg);

//     return () => {
//         window.removeEventListener("scroll", changeBg);
//     };
//   }, []);

  const handleResponsiveMenu = () => {
      setIsOpen(!isOpen);
      // Enable/disable body scroll when the menu is open/closed
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const handleNavItemClick = (ref) => {
    handleResponsiveMenu();
    scrollTo(ref);
  }

  return (
    <div>
        <div ref={homeRef} className={styles.navbar}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  transform: "translateX(-100%)",
                  filter: "blur(5px)"
                },
                visible: {
                  transform: "translateX(0)",
                  filter: "blur(0)"
                }
              }}
              className={styles.logo}
            >
                <Image className={styles.logoImg} src={logo} width={260} height={48} />
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={{hidden: {transform: "translateX(100%)", filter: "blur(5px)"}, visible: {transform: "translateX(0)", filter: "blur(0)"}}} className={`${styles.links} ${poppins.className}`}>
                <ul>
                    <a onClick={() => {scrollTo(homeRef)}}><li>Home</li></a>
                    <a onClick={() => {scrollTo(servicesRef)}}><li>Services</li></a>
                    <a onClick={() => {scrollTo(aboutRef)}}><li>About Us</li></a>
                    <a onClick={() => {scrollTo(contactRef)}}><li>Contact Us</li></a>
                </ul>
            </motion.div>

            <motion.div onClick={handleResponsiveMenu} initial="hidden" animate="visible" variants={{hidden: {transform: "translateX(100%)", filter: "blur(5px)"}, visible: {transform: "translateX(0)", filter: "blur(0)"}}} className={styles.hamburgerIcon} >
                {isOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
            </motion.div>

            <div className={isOpen ? `${styles.navItemsMobile} ${styles.active}` : `${styles.navItemsMobile}`}>
                <a onClick={() => handleNavItemClick(homeRef)}><li>Home</li></a>
                <a onClick={() => handleNavItemClick(servicesRef)}><li>Services</li></a>
                <a onClick={() => handleNavItemClick(aboutRef)}><li>About Us</li></a>
                <a onClick={() => handleNavItemClick(contactRef)}><li>Contact Us</li></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar