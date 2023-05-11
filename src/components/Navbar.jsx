import React from "react";
import styles from "./Styles/Navbar.module.scss";
function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <img
            src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b"
            alt=""
          />
        </div>
        <div className={styles.links}>
          <a href="https://rickandmortyapi.com/documentation">Docs</a>
          <a href="https://rickandmortyapi.com/about">About</a>
          <a
            className={styles.btn}
            href="https://rickandmortyapi.com/support-us"
          >
            SUPPORT US
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
