import React from "react";
import styles from "./SideBar.module.scss"
import Note from "./Note/Note";
import { AppContext } from "../../App";

const SideBar = () => {
    const { searchingNotes } = React.useContext(AppContext)
    if (searchingNotes.length !== 0) {
        return (
            <aside className={styles.sideBar}>
                {
                    searchingNotes.map(note =>
                        <Note key={note.id} note={note}></Note>
                    )
                }
            </aside>
        )
    }else{
        return(
            <aside className={styles.sideBar}><div className={styles.message}>Please add note</div></aside>
        )
    }
}

export default SideBar