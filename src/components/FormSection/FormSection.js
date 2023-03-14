import Button from "../Shared/Button";
import Section from "../Shared/Section";
import SignUpForm from "../SignUpForm/SignUpForm";

const FormSection = () => {
  return (
    <Section title="Working with POST request">
      <div className={`form__container`}>
        <SignUpForm />
      </div>
    </Section>
  );
};

export default FormSection;
