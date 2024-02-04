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
  const {aboutRef, contactRef, scrollTo} = useContext(ScrollContext);

  return (
    <div ref={aboutRef} className={`${styles.container} ${poppins.className}`}>
      <div className={styles.featuresWrapper}>
          <motion.div initial={{transform: "translateX(-100%)", filter: "blur(5px)"}} whileInView={{transform: "translateX(0)", filter: "blur(0)"}} viewport={{once: true}} className={styles.featuresContent}>
              <h2>Empowering Innovation, Engineering Excellence - Your Partner in Progress</h2>
              <p>We are a team of Dynamic & Experienced Engineers, redefining possibilities through comprehensive engineering solutions. Specializing in product design, our expertise extends seamlessly across diverse industries, including construction, Automobile, mining, and shipping.</p>
              <p>With a commitment to excellence, we not only craft innovative solutions but also offer strategic outsourcing services, ensuring your projects are built on precision and efficiency.</p>
              <div onClick={() => {scrollTo(contactRef)}}>
                <Button label="Get In Touch" />
              </div>
          </motion.div>

          <motion.div initial={{transform: "translateX(100%)", filter: "blur(5px)"}} whileInView={{transform: "translateX(0)", filter: "blur(0)"}} viewport={{once: true}} className={styles.featureItems}>
            {features?.map(featureItem => (
              <FeatureItem key={featureItem.id} icon={featureItem.icon} title={featureItem.title} desc={featureItem.desc} width={featureItem.width} height={featureItem.height} mobileWidth={featureItem.mobileWidth} mobileHeight={featureItem.mobileHeight} />
            ))}
          </motion.div>
      </div>
    </div>
  )
}

export default Features