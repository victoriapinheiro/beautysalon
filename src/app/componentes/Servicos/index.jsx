import styles from "./Servicos.module.css";
import icon1 from "icon1.png";
import icon2 from "icon2.png";
import icon3 from "icon3.png";

export default function Servicos() {
    return (
        <main className={styles.servicos} id="Servicos">
            <div className={styles.container_textual}>
                <h2>Serviços</h2>
                <p>Com mais de 10 anos no mercado, o Beautysalon já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais</p>
            </div>
            <div className={styles.container_cards}>
                <div className={styles.card}>
                    <img src={icon1}></img>
                    <h3>Terapia capilar</h3>
                    <p>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
                </div>
                <div className={styles.card}>
                    <img src={icon2}></img>
                    <h3>Cortes</h3>
                    <p>A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.</p>
                </div>
                <div className={styles.card}>
                    <img src={icon3}></img>
                    <h3>Tratamentos</h3>
                    <p>O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.</p>
                </div>
            </div>
        </main>
    );
}