import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import styles from './App.module.scss'
import NoteInfo from './components/NoteInfo/NoteInfo';
import React, { useEffect, useState } from 'react';


export const AppContext = React.createContext();


function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'first note',
      description: 'Не записывать задачу с пустыми инпутами'
    },
    {
      id: 2,
      title: 'second note',
      description: 'qownjqwnm nqw noqnfnwqeif nqnwf nqefnio poqjfp ojmqopfj po'
    },
    {
      id: 3,
      title: 'third note',
      description: 'qownjqwnm nqw noqnfnwqeif nqnwf nqefnio poqjfp ojmqopfj po noqnfnwqeif nqnwf nqefnio poqjfp ojmqopfj po'
    },
  ])

  const [noteFocuseId, setNoteFocuseId] = useState()

  const [editMode, setEditMode ] = useState(false)

  let [fullFocuseNote, setFullFocuseNote] = useState()

  const deleteNote = (id) => {
    setNotes([...notes].filter(n => n.id !== id));
  };


  useEffect(() => {
    setFullFocuseNote(fullFocuseNote = notes.find(n => n.id === noteFocuseId))
  }, [noteFocuseId, notes])
    


  const [addMode, setAddMode] = useState(false)



  return (
    <div className={styles.wrapper}>
      <AppContext.Provider value={{fullFocuseNote,setEditMode,setNotes,deleteNote,setNoteFocuseId,noteFocuseId,setAddMode,notes,editMode}}>
      <Header/>
      <main className={styles.main}>
        <SideBar notes={notes}/>
        <NoteInfo fullFocuseNote={fullFocuseNote} addMode={addMode} editMode={editMode} />
      </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
