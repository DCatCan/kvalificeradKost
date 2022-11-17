import navstyle from "../styles/Navbar.module.scss";
import Link from "next/Link";
import { useState } from "react";

export const Navbar = () => {
  const [menuState, setMenu] = useState(false);
  const [navState, setNav] = useState(false);

  return (
    <div className={`${navstyle["primary-header"]}`}>
      <nav>
        <button
          className={`${navstyle["mobile-nav-toggle"]}`}
          onClick={() => {
            setMenu(!menuState);
            setNav(!navState);
          }}
          aria-controls="primary-navigation"
          aria-expanded={navState}
        ></button>
        <ul
          id="primary-navigation"
          data-visible={menuState}
          className={`${navstyle["primary-navigation"]} ${navstyle["flex"]} `}
        >
          <li>
            <Link href="/">Hem</Link>
          </li>
          <li>
            <Link href="/information">Mer Info</Link>
          </li>
          <li>
            <Link href="/villkor">Villkor</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
