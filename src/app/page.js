import styles from "./page.module.css";
import Inicio from "./componentes/Inicio";
import Sobre from "./componentes/Sobre";
import Servicos from "./componentes/Servicos";
import Contato from "./componentes/Contato";

export default function Home() {
  return (
    <div>
      <Inicio />
      <div className={styles.divider1}></div>
      <Sobre />
      <div className={styles.divider2}></div>
      <Servicos />
      <div className={styles.divider1}></div>
      <Contato />
      <div className={styles.divider2}></div>
    </div>
  );
}
