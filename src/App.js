import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import styles from './App.module.scss'
import NoteInfo from './components/NoteInfo/NoteInfo';
import React, { useEffect, useState } from 'react';


export const AppContext = React.createContext();


function App() {
  const [notes, setNotes] = useState([])

  const [searchingNotes, setSearchingNotes] = useState(notes)

  const [noteFocuseId, setNoteFocuseId] = useState()

  const [editMode, setEditMode] = useState(false)

  let [fullFocuseNote, setFullFocuseNote] = useState()

  function setDefoultNotes(){
    setSearchingNotes(notes)
  }
  useEffect(()=>{
    setSearchingNotes(notes)
  },[notes])

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete the note?")) {
        let filtredNotes = [...notes].filter(note => note.id !== id)
        setNotes(filtredNotes)
    }
  }

  useEffect(() => {
    let noteOnFocus = notes.find(n => n.id === noteFocuseId)
    setFullFocuseNote(noteOnFocus)
  }, [noteFocuseId, notes])


  useEffect(() => {
    document.addEventListener('keydown', detectDeleteKeyDown, true)
    document.addEventListener('keydown', detectAddKeyDown, true)
  })
  const detectDeleteKeyDown = (e) => {
    if (e.key === "Delete") {
      deleteNote(noteFocuseId)
    }
  }
  const detectAddKeyDown = (e) => {
    if (e.key === "+") {
      setAddMode(true)
    }
  }



  const [addMode, setAddMode] = useState(false)



  return (
    <div className={styles.wrapper}>
      <AppContext.Provider value={{
        fullFocuseNote, setEditMode, setNotes, deleteNote,
        setNoteFocuseId, noteFocuseId, setAddMode, notes, editMode,
        searchingNotes, setSearchingNotes,setDefoultNotes
      }}>
        <Header />
        <main className={styles.main}>
          <SideBar />
          <NoteInfo fullFocuseNote={fullFocuseNote} addMode={addMode} editMode={editMode} />
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
