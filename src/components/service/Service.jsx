import Image from "next/image"
import styles from "./service.module.css"
import { motion } from "framer-motion"

const Service = ({ name, desc, image  }) => {
  return (
    <motion.div initial={{scale: 0.6, filter: "blur(5px)"}} whileInView={{scale: 1, filter: "blur(0)"}} viewport={{once: true}} className={styles.container}>
        <div className={styles.details}>
          <div className={styles.imgContainer}>
            <Image src={image} width={80} height={80} />
            <h3>{name}</h3>
            <p>{desc}</p>
          </div>
        </div>
    </motion.div>
  )
}

export default Service