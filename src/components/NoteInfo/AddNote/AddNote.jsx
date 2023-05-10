import React, { useState } from 'react'
import { AppContext } from '../../../App'
import { v4 as uuidv4 } from 'uuid'
import styles from './AddNote.module.scss'


const AddNote = () => {
    let [titleValue, setTitleValue] = useState('')
    let [descriptionValue, setDescriptionValue] = useState('')
    const { setNotes, notes, editMode, fullFocuseNote } = React.useContext(AppContext)
    const v4Id = uuidv4()
    function saveNote() {
        setNotes(
            [...notes, {
                id: v4Id,
                title: titleValue,
                description: descriptionValue
            }],
            setTitleValue(''),
            setDescriptionValue('')
        )
    }
    if (editMode) {
        setTitleValue(fullFocuseNote.title)
        setDescriptionValue(fullFocuseNote.description)
    } else {
        return (
            <div className={styles.addForm}>
                <div className={styles.inputs}>
                    <input className={styles.input} placeholder='Note title' value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
                    <input className={styles.input} placeholder='Note description' value={descriptionValue} onChange={(e) => setDescriptionValue(e.target.value)} />
                </div>
                <button className={styles.saveButton} onClick={saveNote}>Save note</button>
            </div>
        )
    }

}


export default AddNote