import logo from "../assets/logo.svg";
import Button from "./Shared/Button";

import styles from "./Header.module.sass";

const Header = () => (
  <header>
    <div className={styles.notch}></div>
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="CompanyName Logo" />
      <nav className="actions">
        <ul className={styles.list}>
          <li>
            <Button>Users</Button>
          </li>
          <li>
            <Button>Sign up</Button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
