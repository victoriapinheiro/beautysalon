import styles from "./Inicio.module.css";
import banner from "@/app/assets/img/banner.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Inicio() {
    return(
        <main>
            <div className={styles.inicio} id="Inicio">
                <div className={styles.container_banner}>
                    <Image className={styles.banner} src={banner} alt="Banner cabelereira"></Image>
                </div>
                <div className={styles.container_textual}>
                    <h1>Saúde natural para os seus cabelos</h1>
                    <p>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
                    <Link className={styles.btn} href="#">Agendar um  horário</Link>
                </div>
            </div>
        </main>
    );
}