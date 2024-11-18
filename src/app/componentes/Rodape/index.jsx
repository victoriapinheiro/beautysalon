import styles from "./Rodape.module.css";
import Link from "next/link";
import Image from "next/image";
import insta from "@/app/assets/icons/insta.png";
import facebook from "@/app/assets/icons/facebook.png";
import youtube from "@/app/assets/icons/youtube.png";


export default function Rodape() {
    return (
        <main className={styles.rodape} id="Rodape">
            <div className={styles.texto_rodape}>
                <p className={styles.logo}>
                    beauty<span>salon</span>.
                </p>
                <p className={styles.p}>*Empresa fictícia </p>
                <p className={styles.p}>Projeto desenvolvido por Victoria Vivian</p>
            </div>
            <div className={styles.contatos}>
                <Link href="#"><Image src={insta}></Image></Link>
                <Link href="#"><Image src={facebook}></Image></Link>
                <Link href="#"><Image src={youtube}></Image></Link>
            </div>
        </main>
    );
}