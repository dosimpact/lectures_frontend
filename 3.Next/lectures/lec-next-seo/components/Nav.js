import React from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <ul className={navStyles.navigation}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/photos">Photos(SSG)</Link>
      </li>
      <li>
        <Link href="/pictures">Pictures(SSR)</Link>
      </li>
      <li>
        <Link href="/albums">Albums(CSR)</Link>
      </li>
    </ul>
  );
};

export default Nav;
