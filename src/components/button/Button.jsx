import styles from "./button.module.css";

const Button = ({label}) => {
  return (
    <div className={styles.container}>
        <p className={styles.label}>{label}</p>
    </div>
  )
}

export default Button