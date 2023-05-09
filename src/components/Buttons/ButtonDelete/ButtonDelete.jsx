import React from "react";
import { TiTrash } from "react-icons/ti";
import styles from "./../Button.module.scss"
import { AppContext } from "../../../App";

const ButtonDelete = () => {
    const { noteFocuseId, deleteNote } = React.useContext(AppContext)
    return (
        <button className={styles.button} onClick={() => deleteNote(noteFocuseId)}><TiTrash className={styles.buttonIcon} /></button>
    )
}

export default ButtonDelete