import React,{ useEffect, useState } from "react"
import { AppContext } from "../../../App"
import styles from "./Search.module.scss"


const Search = () => {
    const { searchingNotes, setSearchingNotes,setDefoultNotes } = React.useContext(AppContext)

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const filtredNotes = searchingNotes.filter(note => {
            return note.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        setSearchingNotes(filtredNotes)
        if(searchValue.length===0){
            return setDefoultNotes()
        }
    })
   

    return (
        <form>
            <input className={styles.input} type="text" placeholder="Search note" onChange={(e) => setSearchValue(e.target.value)} />
        </form>
    )
}

export default Search