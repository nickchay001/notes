import React from "react";
import styles from "./SideBar.module.scss"
import Note from "./Note/Note";

const SideBar = ({ notes, setNoteFocuseId }) => {
    if (!notes) {
        return (
            <aside className={styles.sideBar}>Please create note</aside>
        )
    } else {
        return (
            <aside className={styles.sideBar}>
                {
                    notes.map(note =>
                        <Note key={note.id} setNoteFocuseId={setNoteFocuseId} note={note}></Note>
                    )
                }
            </aside>
        )
    }
}

export default SideBar