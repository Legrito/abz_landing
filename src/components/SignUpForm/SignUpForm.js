import { useState } from "react";
import Button from "../Shared/Button";
import InputText from "./InputText";
import styles from "./SignUpForm.module.sass";
import Positions from "./Positions";
import InputRadio from "./InputRadio";
import Fieldset from "../Shared/Fieldset";
import InputFile from "./InputFile";
// import { validatevalueData } from "./helpers";

const EmailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const SignUpForm = () => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("Lawyer");
  const [file, setFile] = useState();

  const handleFileChange = e => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handlePositionChange = e => {
    setPosition(e.target.id);
  };

  const handleChangeTextInput = e => {
    const value = String(e.target.value).trim();

    switch (e.target.type) {
      case "text":
        return setName({ value, error: "" });
      case "email":
        return setEmail({ value, error: "" });
      case "tel":
        return setPhone({ value, error: "" });
      default:
        return null;
    }
  };

  const handleValidateName = e => {
    const value = e.target.value;

    if (!value || value.length < 2 || value.length > 60) {
      return setName({ value, error: "Error message" });
    }
    return setName({ value, error: "" });
  };

  const handleValidateEmail = e => {
    const value = e.target.value;

    if (!value || !EmailRegex.test(value)) {
      return setEmail({ value, error: "Error message" });
    }
    return setEmail({ value, error: "" });
  };

  const handleValidatePhone = e => {
    const value = e.target.value;
    const phoneRegex = /^(\+380)[0-9]{9}$/;

    if (!value || !phoneRegex.test(value)) {
      return setPhone({ value, error: "Error message" });
    }
    return setPhone({ value, error: "" });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form className={styles.form}>
      <InputText
        type="text"
        value={name.value}
        onChange={handleChangeTextInput}
        error={name.error}
        placeholder="Your name"
        onBlur={handleValidateName}
      />
      <InputText
        type="email"
        value={email.value}
        onChange={handleChangeTextInput}
        error={email.error}
        placeholder="Email"
        onBlur={handleValidateEmail}
      />
      <InputText
        type="tel"
        value={phone.value}
        onChange={handleChangeTextInput}
        error={phone.error}
        placeholder="Phone"
        onBlur={handleValidatePhone}
      />
      <Positions positionCurrent={position} onChange={handlePositionChange} />
      <InputFile onChange={handleFileChange} file={file} />
      <Button type="submit" onClick={handleSubmit}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
