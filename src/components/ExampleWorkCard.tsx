import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./ExampleWorkCard.module.css";

type Props = {
  link: string;
  title: string;
  description: string;
  image: string;
  lgDir?: string;
};

export default function ExampleWorkCard({
  link,
  title,
  description,
  image,
  lgDir,
}: Props) {
  return (
    <Link className={styles.linkWrapper} href={link}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `linear-gradient(${
            lgDir || "to bottom"
          }, #e144fd, #15b9f3)`,
        }}
      >
        <div className={styles.innerCard}>
          <div className={styles.cardHeader}>
            <img src={image} alt={title} className={styles.image} />
            <Typography variant="h4" className={styles.title}>
              {title}
            </Typography>
          </div>
          <Typography variant="body2" className={styles.description}>
            {description}
          </Typography>
        </div>
      </div>
    </Link>
  );
}
