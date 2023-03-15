import { useEffect, useState } from "react";
import Button from "../Shared/Button";
import InputText from "./InputText";
import styles from "./SignUpForm.module.sass";
import Positions from "./Positions";
import InputFile from "./InputFile";
import { registerUser, getUsers } from "../../apiMethods/helpers";
import { validateImageSize } from "./helpers";
import Loader from "../Shared/Loader";

const EmailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const SignUpForm = () => {
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
    const phoneRegex = /^(\+380)[0-9]{9}$/;

    if (!value || !phoneRegex.test(value)) {
      return setPhone({ value, error: "Error message" });
    }
    return setPhone({ value, error: "" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIloading(true);

    const formData = new FormData();
    // formData.append("name", name.value);
    // formData.append("email", email.value);
    // formData.append("phone", phone.value);
    // formData.append("position_id", position.id);
    // formData.append("photo", file);
    formData.append("name", "Alex BBB");
    formData.append("email", "fff@dfrg.com");
    formData.append("phone", "+380976645573");
    formData.append("position_id", "2");
    formData.append(
      "photo",
      "https://frontend-test-assignment-api.abz.agency/images/users/6410a11e9035c12469.jpg"
    );

    registerUser(formData)
      .then(data => console.log(data))
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
