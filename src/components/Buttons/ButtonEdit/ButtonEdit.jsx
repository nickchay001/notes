import React from "react";
import { TiBrush } from "react-icons/ti";
import styles from "./../Button.module.scss"
import { AppContext } from "../../../App";

const ButtonEdit = () => {
    const {setEditMode } = React.useContext(AppContext)
    return (
        <button className={styles.button} onClick={() => setEditMode(true)}><TiBrush className={styles.buttonIcon} /></button>
    )
}

export default ButtonEdit