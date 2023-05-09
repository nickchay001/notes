import React from "react"
import styles from "./Header.module.scss"
import ButtonDelete from "../Buttons/ButtonDelete/ButtonDelete"
import ButtonEdit from "../Buttons/ButtonEdit/ButtonEdit"
import ButtonAdd from "../Buttons/ButtonAdd/ButtonAdd"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.buttons}>
                <ButtonAdd />
                <ButtonDelete/>
                <ButtonEdit />
            </div>
        </header>
    )
}

export default Header