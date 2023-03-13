import logo from "../assets/logo.svg";

import styles from "./Header.module.sass";

const Header = () => (
  <header>
    <div className={styles.notch}></div>
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <nav className="actions">
        <ul>
          <li>
            <button type="button"></button>
          </li>
          <li>
            <button type="button"></button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
