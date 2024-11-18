import Image from "next/image";
import styles from "./Sobre.module.css";
import banner_sobre from "@/app/assets/img/banner-sobre.jpg";

export default function Sobre() {
    return(
        <main className={styles.container_sobre} id="Sobre">
            <div className={styles.container_img}>
                <Image className={styles.banner_sobre} src={banner_sobre} alt="Banner cabeleleiras"></Image>
            </div>
            <div className={styles.container_textual}>
                <h2>Sobre nós</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. 

In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed. 

Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.</p>
            </div>
        </main>
    );
}