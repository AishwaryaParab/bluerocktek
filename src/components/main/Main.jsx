"use client"

import styles from "./main.module.css";
import model from "../../../public/model.svg";
import circuit from "../../../public/circuit.svg";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import CountUp from "react-countup";
import { motion } from "framer-motion";


const Main = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: 0.8,
                    opacity: 0,
                    flex: 1
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transitionDelay: 1.2,
                    flex: 1
                }
            }}>
                <Image className={styles.mainImg} src={model} width="auto" height="auto" />
            </motion.div>

            <div className={styles.headline}>
                <div className={styles.circuit}>
                    <Image src={circuit} />
                </div>
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: 0.8,
                        opacity: 0,
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transitionDelay: 1.2
                    }
                }}>
                    <h2 className={poppins.className}><span className={styles.gradient}>Designing</span> the World we envision through <span className={styles.gradient}>Engineering</span></h2>
                </motion.div>

                {/* <div className={styles.radialGradient}></div> */}
            </div>
        </div>

        <video className={styles.video} autoPlay muted loop>
            <source src="/mission-video.mp4" type="video/mp4" />
        </video>

        {/* <div className={styles.stats}>
            <div className={styles.stat}>
                <div className={styles.counter}>
                    <CountUp end={100} /><span>+</span>
                </div>
                <p>INDUSTRIAL 3D PRINTERS</p>
            </div>

            <div className={styles.stat}>
                <div className={styles.counter}>
                    <CountUp end={100} /><span>+</span>
                </div>
                <p>INDUSTRIES IMPACTED</p>
            </div>

            <div className={styles.stat}>
                <div className={styles.counter}>
                    <CountUp end={100} /><span>+</span>
                </div>
                <p>HAPPY CUSTOMERS</p>
            </div>
        </div> */}
    </div>
  )
}

export default Main