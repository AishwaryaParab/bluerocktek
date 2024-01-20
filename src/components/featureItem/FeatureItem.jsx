import Image from "next/image";
import styles from "./featureItem.module.css";

const FeatureItem = ({ icon, title, desc, width, height }) => {
  return (
    <div className={styles.container}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
              <Image className={styles.img} src={icon} width={width} height={height} />
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