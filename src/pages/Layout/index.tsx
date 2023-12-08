import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./layout.module.scss"

const Layout = () => {
    return (
        <>
        <Header />
        <div className={styles.menu}>
            <NavLink className={styles["menu__home"]} to="./home">Home</NavLink>
            <NavLink className={styles["menu__about"]} to="./about">About</NavLink>
            <NavLink className={styles["menu__pokemon"]}to="./pokemon">Pokemon</NavLink>
            <NavLink className={styles["menu__ash"]}to="./ash">Ash</NavLink>
            <NavLink className={styles["menu__pokedex"]}to="./pokedex">Pokedex</NavLink>
        </div>
        <div className="container">
            <div className="sidebar"></div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
        {/* <Header /> */}
        </>
    )
}

export default Layout;