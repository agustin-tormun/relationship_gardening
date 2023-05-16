import Link from "next/link"
import styles from '../../styles/navbar/navbar.module.css'
import { useState } from "react"
import NavItem from "./navbar_item"


const NavBar = () => {
  return (
    <header className={styles.head_style}>
        <nav className={styles.nav}>
            <Link href={"/"} className={styles.logo}>
                🍃
            </Link>
            <button className={styles.btn__login} onClick={() => console.log('login')}>Login</button>
        </nav>
    </header>
  );
}

export default NavBar