import styles from "./Section.module.sass";

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className={styles.section}>
      <div className="section__container">
        <h2 className={styles.title} data-item>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
