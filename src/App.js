import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import styles from './App.module.scss'
import NoteInfo from './components/NoteInfo/NoteInfo';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'first note',
      description: 'qownjqwnm nqw noqnfnwqeif nqnwf nqefnio poqjfp ojmqopfj po'
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

  
  const deleteNote = (id) => {
    setNotes([...notes].filter(n => n.id !== id));
  };

  let [fullFocuseNote, setFullFocuseNote] = useState()

  useEffect(() => {
    setFullFocuseNote(fullFocuseNote = notes.find(n => n.id === noteFocuseId))
  }, [noteFocuseId, notes])
    

  



  return (
    <div className={styles.wrapper}>
      <Header deleteNote={deleteNote} noteFocuseId={noteFocuseId} />
      <main className={styles.main}>
        <SideBar setNoteFocuseId={setNoteFocuseId} notes={notes}
          setNotes={setNotes} />
        <NoteInfo fullFocuseNote={fullFocuseNote} />
      </main>
    </div>
  );
}

export default App;
