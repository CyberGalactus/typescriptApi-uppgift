import Pokemonball from "../../assets/pokemonball.jpeg";
import Avatar from "../Avatar";
import styles from './header.module.scss' ;

const Header = () => {

    return (
      <div className={styles.header}>
       <div className={styles["header__logo"]}><img src={Pokemonball} alt="pokemonball" height="200px"/></div>
       <h1 className={styles['header__title']}>Catch a pokemon</h1>
       <div className={styles['header__avatar']}><Avatar /></div>
      </div>
    )
  }
  
  export default Header;