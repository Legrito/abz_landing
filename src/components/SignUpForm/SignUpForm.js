import { useContext, useState } from "react";
import Button from "../Shared/Button";
import InputText from "./InputText";
import styles from "./SignUpForm.module.sass";
import Positions from "./Positions";
import InputFile from "./InputFile";
import { registerUser } from "../../apiMethods/helpers";
import { validateImageSize } from "./helpers";
import { AppContext } from "../../App";

const EmailRegex =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const SignUpForm = () => {
  const { handleRegistered } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState({ id: 1, name: "Lawyer" });
  const [file, setFile] = useState("");
  const [isLoading, setIloading] = useState(false);

  const handleFileChange = e => {
    const value = e.target.files[0];
    const imgRegex = /^image\/(jpeg|jpg)$/;

    if (!imgRegex.test(value.type)) {
      return setFile({ value, error: "Error message" });
    }
    if (value.size > 5000000) {
      return setFile({ value, error: "Error message" });
    }
    validateImageSize(value)
      .then(() => setFile({ value, error: "" }))
      .catch(error => {
        console.log(error);
        setFile({ value, error });
      });
  };

  const handlePositionChange = e => {
    setPosition({ id: e.target.id, name: e.target.value });
  };

  const handleChangeTextInput = e => {
    const value = e.target.value;

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
    const value = String(e.target.value).trim();

    if (!value || value.length < 2 || value.length > 60) {
      return setName({ value, error: "Error message" });
    }
    return setName({ value, error: "" });
  };

  const handleValidateEmail = e => {
    const value = String(e.target.value).trim();

    if (!value || !EmailRegex.test(value)) {
      return setEmail({ value, error: "Error message" });
    }
    return setEmail({ value, error: "" });
  };

  const handleValidatePhone = e => {
    const value = String(e.target.value).trim();
    const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/;

    if (!value || !phoneRegex.test(value)) {
      return setPhone({ value, error: "Error message" });
    }
    return setPhone({ value, error: "" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIloading(true);

    let fileField = document.querySelector('input[type="file"]');

    console.log(fileField.files[0]);
    console.log(file.value);

    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("phone", phone.value);
    formData.append("position_id", position.id);
    formData.append("photo", file.value);

    registerUser(formData)
      .then(data => {
        console.log(data);
        handleRegistered(true);
      })
      .catch(error => console.log(error.message))
      .finally(() => setIloading(false));
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
      <InputFile
        onChange={handleFileChange}
        error={file.error}
        file={file.value}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
        isDisabled={
          isLoading ||
          name.error ||
          email.error ||
          phone.error ||
          file.error ||
          !name ||
          !email ||
          !phone
        }
      >
        {isLoading ? "Loading..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignUpForm;
