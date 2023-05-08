import React from "react";
import styles from "./Note.module.scss"

const Note = ({ note, setNoteFocuseId }) => {
    return (
        <div onClick={() => setNoteFocuseId(note.id)} className={styles.note}>
            <h6 className={styles.title}>{note.title}</h6>
            <div className={styles.description}>{note.description}</div>

        </div>
    )
}

export default Note