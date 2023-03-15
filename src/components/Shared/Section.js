import PropTypes from "prop-types";
import styles from "./Section.module.sass";

const Section = ({ id, title, children, className }) => {
  return (
    <section id={id} className={styles.section}>
      <div className="section__container">
        <h2 className={`${styles.title} ${className}`} data-item>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

Section.prototype = {
  id: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
