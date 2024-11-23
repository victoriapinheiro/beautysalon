import styles from "./Topo.module.css"
import Link from "next/link"

export default function Topo() {
    return (
        <main className={styles.teste}>
            <div className={styles.container_principal}>
                <div className={styles.logo}>
                    <p>
                        beauty<span>salon</span>.
                    </p>
                </div>
                <div>
                    <nav className={styles.menu}>
                        <li>
                            <ul><Link className={styles.link_menu} href="/#Inicio">Início</Link></ul>
                            <ul><Link className={styles.link_menu} href="/#Sobre">Sobre</Link></ul>
                            <ul><Link className={styles.link_menu} href="/#Servicos">Serviços</Link></ul>
                            <ul><Link className={styles.link_menu} href="#">Depoimentos</Link></ul>
                            <ul><Link className={styles.link_menu} href="/#Contato">Contato</Link></ul>
                        </li>
                    </nav>
                </div>
            </div>
            <div className={styles.tarja}></div>
            
        </main>
    );
  }