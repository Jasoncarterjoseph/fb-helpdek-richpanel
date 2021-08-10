import { style } from "@material-ui/system";
import React, { useState } from "react";

import styles from "./item.module.scss";

export const Item = ({
  item: { id, fname, lname, type, intro },
  selected,
  onSelect,
}) => {
  return (
    <div className={styles.item} onClick={() => onSelect(id)}>
      <div className={styles.head}>
        <div className={styles.check}>
          <input
            type={"checkbox"}
            onChange={() => onSelect(id)}
            checked={selected}
          />
        </div>
        <div className={styles.title}>
          <div>
            {fname} {""}
            {lname}
          </div>
          <small>Facebook {type}</small>
        </div>
        <div className={styles.time}>10min</div>
      </div>
      <div className={styles.intro}>
        <div className={styles.heading}>{intro.title}</div>
        <div className={styles.message}>{intro.message}</div>
      </div>
    </div>
  );
};
