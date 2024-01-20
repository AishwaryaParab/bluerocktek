"use client"

import Button from "../button/Button";
import FeatureItem from "../featureItem/FeatureItem";
import styles from "./features.module.css";
import { poppins } from "@/utils/fonts";
import { features } from "@/utils/features";
import { useContext } from "react";
import { ScrollContext } from "@/context/ScrollContext";
import { motion } from "framer-motion";

const Features = () => {
  const {aboutRef} = useContext(ScrollContext);

  return (
    <div ref={aboutRef} className={`${styles.container} ${poppins.className}`}>
        <motion.div initial={{transform: "translateX(-100%)", filter: "blur(5px)"}} whileInView={{transform: "translateX(0)", filter: "blur(0)"}} viewport={{once: true}} className={styles.featuresContent}>
            <h2>You do the business, we will handle the prototype</h2>
            <p>We are a team of Dynamic & Experienced Engineers from International Equipment Manufacturing industry. From concept to reality, we specialize in crafting innovative solutions that push boundaries.</p>
            <Button label="Get In Touch" />
        </motion.div>

        <motion.div initial={{transform: "translateX(100%)", filter: "blur(5px)"}} whileInView={{transform: "translateX(0)", filter: "blur(0)"}} viewport={{once: true}} className={styles.featureItems}>
          {features?.map(featureItem => (
            <FeatureItem key={featureItem.id} icon={featureItem.icon} title={featureItem.title} desc={featureItem.desc} width={featureItem.width} height={featureItem.height} />
          ))}
        </motion.div>
    </div>
  )
}

export default Features