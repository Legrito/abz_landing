import Button from "./Shared/Button";
import styles from "./Hero.module.sass";

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <h1 data-item>Test assignment for front-end developer</h1>
      <p data-item>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button path="#sign_up">Sign up</Button>
    </div>
  </section>
);

export default Hero;
