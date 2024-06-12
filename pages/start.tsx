import StartLayout from "@/layouts/start";
import { Logo } from "@/components/Logo";
import styles from "./styles.module.css";
import Button from "@/components/Link";

export default function StartPage() {
  return (
    <StartLayout>
      <div className={styles.finishContainer}>
        <Logo />
        <div className={styles.content}>
          <h1>Who wants to be a millionaire?</h1>

          <Button href='main' title='Start' />
        </div>
      </div>
    </StartLayout>
  );
}
