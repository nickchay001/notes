import React, { useState } from "react"
import styles from "../AddNote/AddNote.module.scss"
import { AppContext } from "../../../App"


const EditNote = () => {
    const { setNotes, notes, fullFocuseNote, setEditMode } = React.useContext(AppContext)
    let [editTitleValue, setEditTitleValue] = useState(fullFocuseNote.title)
    let [editDescriptionValue, setEditDescriptionValue] = useState(fullFocuseNote.description)

    
    

    function saveEditNote() {
        if (editTitleValue) {
            let updateNotes = [...notes].map(note => {
                if (note.id === fullFocuseNote.id) {
                    note.title = editTitleValue;
                    note.description = editDescriptionValue
                }
                return note
            });
            setNotes(updateNotes);
            setEditMode(false)
        } else if (!editTitleValue) {
            return (
                alert('Please add note title')
            )
        }

    }
    return (
        <>
            <div className={styles.addForm}>
                <div className={styles.inputs}>
                    <input className={styles.input} placeholder='Note title' value={editTitleValue} onChange={(e)=>setEditTitleValue(e.target.value)} />
                    <input className={styles.input} placeholder='Note description' value={editDescriptionValue} onChange={(e) => setEditDescriptionValue(e.target.value)} />
                </div>
                <button className={styles.saveButton} onClick={() => saveEditNote()}>Save note</button>
            </div>
        </>
    )
}

export default EditNote