import React from "react";
import styles from "./Note.module.scss"
import { AppContext } from "../../../App";

const Note = ({note}) => {
    const { setNoteFocuseId ,setAddMode} = React.useContext(AppContext)
    function onClick(id){
        setNoteFocuseId(id);
        setAddMode(false)
    }
    return (
        <div onClick={() => onClick(note.id)} className={styles.note}>
            <h6 className={styles.title}>{note.title}</h6>
            <div className={styles.description}>{note.description}</div>
        </div>
    )
}

export default Note