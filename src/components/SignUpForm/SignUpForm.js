import { useContext, useState } from "react";
import Button from "../Shared/Button";
import InputText from "./InputText";
import styles from "./SignUpForm.module.sass";
import Positions from "./Positions";
import InputFile from "./InputFile";
import { registerUser } from "../../apiMethods/helpers";
import { validateImageSize } from "./helpers";
import { AppContext } from "../../App";
import { EMAIL__REGEX, PHOTO_REGEX, PHONE_REGEX } from "../../constants";

const SignUpForm = () => {
  const { handleRegistered } = useContext(AppContext);
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });
  const [position, setPosition] = useState({ id: 1, name: "Lawyer" });
  const [file, setFile] = useState({ value: "", error: "" });
  const [isLoading, setIloading] = useState(false);

  const handleFileChange = e => {
    const value = e.target.files[0];
    console.log(value.type);

    if (!PHOTO_REGEX.test(value.type)) {
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

    if (!value || !EMAIL__REGEX.test(value)) {
      return setEmail({ value, error: "Error message" });
    }
    return setEmail({ value, error: "" });
  };

  const handleValidatePhone = e => {
    const value = String(e.target.value).trim();

    if (!value || !PHONE_REGEX.test(value)) {
      return setPhone({ value, error: "Error message" });
    }
    return setPhone({ value, error: "" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIloading(true);

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
          !name.value ||
          !email.value ||
          !phone.value ||
          !file.value
        }
      >
        {isLoading ? "Loading..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignUpForm;
