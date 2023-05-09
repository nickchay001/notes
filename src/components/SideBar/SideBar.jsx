import React, { useEffect } from "react";
import styles from "./SideBar.module.scss"
import Note from "./Note/Note";
import { AppContext } from "../../App";

const SideBar = () => {
    const { notes } = React.useContext(AppContext)
    return (
        <aside className={styles.sideBar}>
            {
                notes.map(note =>
                    <Note key={note.id} note={note}></Note>
                )
            }
        </aside>
    )
}

export default SideBar