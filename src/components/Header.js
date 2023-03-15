import logo from "../assets/logo.svg";
import Button from "./Shared/Button";

import styles from "./Header.module.sass";

const Header = () => (
  <header>
    <div className={styles.notch}></div>
    <div className={`${styles.container} header__container`}>
      <img src={logo} className={styles.logo} alt="CompanyName Logo" />
      <nav className="actions">
        <ul className={styles.list}>
          <li>
            <Button path="#users">Users</Button>
          </li>
          <li>
            <Button path="#sign_up">Sign up</Button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
