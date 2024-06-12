import { Props } from "./types";
import { FC } from "react";
import styles from "./styles.module.css";

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <main>
        <div className={styles.gradient}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
