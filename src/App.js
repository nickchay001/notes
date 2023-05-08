import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import styles from './App.module.scss'
import NoteInfo from './components/NoteInfo/NoteInfo';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <NoteInfo/>
      </main>
    </div>
  );
}

export default App;
