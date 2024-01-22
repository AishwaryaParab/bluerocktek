"use client"

import React from 'react';
import styles from "./mission.module.css";
import { poppins } from '@/utils/fonts';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mission}>
        <motion.div initial={{scale: 0.5, filter: "blur(5px)", transform: "translateY(-100px)"}} whileInView={{scale: 1, filter: "blur(0)", transform: "translateY(0)"}} viewport={{once: true}} className={styles.missionTitle}>
          <h2 className={styles.gradient}>Our Mission</h2>
        </motion.div>

        <motion.div initial={{transform: "translateX(100%)", filter: "blur(5px)"}} whileInView={{transform: "translateX(0)", filter: "blur(0)"}} viewport={{once: true}} className={styles.missionStatement}>
          <p className={poppins.className}>At BLUEROCKTEK, our mission is to passionately create innovative and exceptional product designs that not only meet but exceed our customer&apos;s expectations. We are dedicated to understanding and anticipating the unique needs of our clients, collaborating closely with them to transform their ideas into aesthetically pleasing, functional, and market-leading solutions.</p>
        </motion.div>
      </div>

      <div className={styles.vision}>
        <motion.div initial={{scale: 0.5, filter: "blur(5px)", transform: "translateY(100px)"}} whileInView={{scale: 1, filter: "blur(0)", transform: "translateY(0)"}} viewport={{once: true}} className={styles.visionTitle}>
          <h2 className={styles.gradient}>Our Vision</h2>
        </motion.div>

        <motion.div initial={{transform: "translateX(-100%)", filter: "blur(5px)"}} whileInView={{transform: "translateX(0)", filter: "blur(0)"}} viewport={{once: true}} className={styles.visionStatement}>
          <p className={poppins.className}>At BLUEROCKTEK, we envision a future where exceptional product designs become synonymous with our commitment to exceeding customer expectations. We strive to be the leading force in shaping industries through our innovative and customer-centric design solutions. Our vision is to inspire a world where every product, born from our passion and expertise, seamlessly integrates into the lives of users, enhancing their experiences and surpassing their desires.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Mission