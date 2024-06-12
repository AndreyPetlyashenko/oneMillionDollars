import { Props } from "./types";
import { FC, useCallback, useEffect, useState } from "react";
import styles from "@/components/Prizes/styles.module.css";
import { PrizePill } from "../PrizePill";
import cx from "classnames";
import { Burger } from "../Burger";

const Prizes: FC<Props> = ({ prizes, round, earnedMoney }) => {
  return (
    <div className={cx(styles.prizes)}>
      {prizes.map((prize, index) => (
        <PrizePill
          key={index}
          prize={prize}
          isCurrentRound={index === round}
          isBeaten={earnedMoney >= prize}
        />
      ))}
    </div>
  );
};

export default Prizes;
