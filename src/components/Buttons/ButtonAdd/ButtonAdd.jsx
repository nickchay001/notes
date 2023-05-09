import React from "react";
import { TiPlusOutline } from "react-icons/ti";
import styles from "./../Button.module.scss"
import { AppContext } from "../../../App";

const ButtonAdd = () => {
    const {setAddMode} = React.useContext(AppContext)
    function addNode() {
        setAddMode(true)
    }
    return (
        <button className={styles.button} onClick={() => addNode()}><TiPlusOutline styles="" className={styles.buttonIcon} /></button>
    )
}

export default ButtonAdd