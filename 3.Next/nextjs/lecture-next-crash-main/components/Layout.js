import React from "react";
import Styles from "../styles/Layout.module.css";
import Nav from "../components/Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      <div className={Styles.container}>
        <Header />
        <main className={Styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
