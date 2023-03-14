import styles from "./Section.module.sass";

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <div className="section__container">
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
