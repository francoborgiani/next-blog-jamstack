import React from "react";
import NextLink from "next/link";
import styles from "./styles/Header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <NextLink href="/">
        <a>
          <h1>Borgi | Blog</h1>
        </a>
      </NextLink>
    </header>
  );
};
