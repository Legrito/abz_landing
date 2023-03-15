import Section from "./Shared/Section";
import picture from "../assets/success-image.svg";
import styles from "./SuccessSection.module.sass";

const SuccessSection = () => {
  return (
    <Section className="active" title="User successfully registered">
      <div className={`${styles.container} success__container`}>
        <img src={picture} alt="User Registered" width="328" height="290" />
      </div>
    </Section>
  );
};

export default SuccessSection;
