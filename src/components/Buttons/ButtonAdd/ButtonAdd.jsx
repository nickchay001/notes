import React from "react";
import { TiPlusOutline } from "react-icons/ti";
import styles from "./../Button.module.scss"

const ButtonAdd = () => {
    function addNode() {

    }
    return (
        <button className={styles.button} onClick={() => addNode()}><TiPlusOutline styles="" className={styles.buttonIcon} /></button>
    )
}

export default ButtonAdd