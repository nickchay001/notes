import React from "react";
import { TiBrush } from "react-icons/ti";
import styles from "./../Button.module.scss"

const ButtonEdit = () => {
    function editNode() {

    }
    return (
        <button className={styles.button} onClick={() => editNode()}><TiBrush className={styles.buttonIcon} /></button>
    )
}

export default ButtonEdit