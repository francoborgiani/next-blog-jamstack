import React from "react";
import { Header, Footer } from "../ui";
import styles from "./styles/MainLayout.module.css";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
