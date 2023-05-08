import React from "react";
import { TiTrash } from "react-icons/ti";
import styles from "./../Button.module.scss"

const ButtonDelete = (props) => {
   
    return (
        <button className={styles.button} onClick={() => props.deleteNote(props.noteFocuseId)}><TiTrash className={styles.buttonIcon} /></button>
    )
}

export default ButtonDelete