import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./styles.module.css";

import "../styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
