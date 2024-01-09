import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/cliente">Clientes</Link>
      <Link href="/destino">Destinos</Link>
      <Link href="/viagem">Viagens</Link>
    </nav>
  );
};

export default Navbar;
