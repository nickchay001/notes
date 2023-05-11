import React from "react";
import styles from "./NoteInfo.module.scss"
import AddNote from "./AddNote/AddNote";
import EditNote from "./EditNote/EditNote";
import ButtonEdit from "../Buttons/ButtonEdit/ButtonEdit";
import ButtonDelete from "../Buttons/ButtonDelete/ButtonDelete";

const NoteInfo = ({ fullFocuseNote, addMode, editMode }) => {
    if (addMode) {
        return (
            <div className={styles.noteInfo}>
                <AddNote />
            </div>
        )
    } if (editMode) {
        return (
            <div className={styles.noteInfo}>
                <EditNote />
            </div>
        )
    } else {
        if (fullFocuseNote) {
            return (
                <div className={styles.noteInfo}>
                    <div className={styles.info}>
                        <h5 className={styles.title}>{fullFocuseNote.title}</h5>
                        <div className={styles.description}>{fullFocuseNote.description}</div>
                    </div>
                    <div className={styles.buttons}>
                        <ButtonDelete />
                        <ButtonEdit />
                    </div>
                </div>
            )
        } if (!fullFocuseNote) {
            return (
                <div className={styles.noteInfo}>
                    <h4 className={styles.warning}>Please select a note</h4>
                </div>
            )
        }
    }
}

export default NoteInfo;