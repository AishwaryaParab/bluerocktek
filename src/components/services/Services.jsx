"use client";

import Image from "next/image";
import styles from "./services.module.css";
import underline from "../../../public/underline.svg";
import { services } from "@/utils/services";
import Service from "../service/Service";
import { poppins } from "@/utils/fonts";
import { useContext } from "react";
import { ScrollContext } from "@/context/ScrollContext";

const Services = () => {
  const {servicesRef} = useContext(ScrollContext);

  return (
    <div ref={servicesRef} className={styles.container}>
        <h2 className={`${styles.title} ${poppins.className}`}>Our Services</h2>
        <Image className={styles.underline} src={underline} />

        <div className={styles.services}>
          {services.map(service => (
            <Service key={service.id} name={service.name} desc={service.desc} image={service.image} />
          ))}
        </div>
    </div>
  )
}

export default Services