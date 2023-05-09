import React from "react";
import styles from "./NoteInfo.module.scss"
import AddNote from "./AddNote/AddNote";

const NoteInfo = ({ fullFocuseNote, addMode }) => {


    if (!addMode) {
        if (!fullFocuseNote) {
            return (
                <div className={styles.noteInfo}>
                    <h4 className={styles.warning}>Please select a note</h4>
                </div>
            )
        } else {
            return (
                <div className={styles.noteInfo}>
                    <h5 className={styles.title}>{fullFocuseNote.title}</h5>
                    <div className={styles.description}>{fullFocuseNote.description}</div>
                </div>
            )
        }
    } else {
        return (
            <div className={styles.noteInfo}>
                <AddNote/>
            </div>
        )
    }
}

export default NoteInfo