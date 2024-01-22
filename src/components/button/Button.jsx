import styles from "./button.module.css";

const Button = ({label, type}) => {

  return (
    <button type={label == "Submit" ? "submit" : "button"} className={styles.container}>
        <p className={styles.label}>{label}</p>
    </button>
  )
}

export default Button