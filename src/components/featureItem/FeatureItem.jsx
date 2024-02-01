"use client"

import Image from "next/image";
import styles from "./featureItem.module.css";
import { useState, useEffect } from "react";

const FeatureItem = ({ icon, title, desc, width, height, mobileWidth, mobileHeight }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1125); // if width is less -> true or else false
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only on mount and unmount

  return (
    <div className={styles.container}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
              <Image className={styles.img} src={icon} width={isMobile ? mobileWidth : width} height={isMobile ? mobileHeight : height} />
          </div>
        </div>

        <div className={styles.content}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default FeatureItem