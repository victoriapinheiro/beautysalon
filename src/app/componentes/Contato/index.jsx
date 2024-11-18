import styles from "./Contato.module.css";
import Link from "next/link";
import Image from "next/image";
import wpp from "@/app/assets/icons/wpp.png";
import tel from "@/app/assets/icons/phone.png";
import email from "@/app/assets/icons/mail.png";
import map from "@/app/assets/icons/map.png";

export default function Contato() {
  return (
    <main className={styles.contato} id="Contato">
      <div className={styles.container_textual}>
        <h2>Entre em contato com a gente!</h2>
        <p>
          Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir
          suas críticas e sugestões.
        </p>
        <Link className={styles.btn} href="#">
          <Image src={wpp}></Image>
          <p>Entrar em contato</p>
        </Link>
      </div>
      <div className={styles.container_contatos}>
        <div>
          <Image src={tel}></Image>
          <p>11 99845-6754</p>
        </div>
        <div>
          <Image src={map}></Image>
          <p>R. Amauri Souza, 346</p>
        </div>
        <div>
          <Image src={email}></Image>
          <p>contato@beautysalon.com</p>
        </div>
      </div>
    </main>
  );
}
