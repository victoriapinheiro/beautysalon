import "./globals.css";
import Topo from "./componentes/Topo";
import Rodape from "./componentes/Rodape";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="espaco_topo">
        <Topo />
        </div>
        
        {children}
        <Rodape />
      </body>
    </html>
  );
}