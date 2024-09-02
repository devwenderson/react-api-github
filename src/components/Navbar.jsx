import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to={"/"} className={styles.logo}>Usando Api Github</Link>
      <ul className={styles["nav-list"]}>
        <li><Link to={"/"} className={styles["nav-link"]}>Início</Link></li>
        <li><Link to={"buscar-usuario/"} className={styles["nav-link"]}>Buscar usuário</Link></li>
      </ul>
    </nav>
  );
};
