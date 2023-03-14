import { useEffect, useState } from "react";
import InputRadio from "./InputRadio";
import Fieldset from "../Shared/Fieldset";
import { getPositions } from "../../apiMethods/helpers";

const Positions = ({ positionCurrent, onChange }) => {
  const [positions, setPosition] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getPositions()
      .then(data => setPosition(data.positions))
      .catch(error => setError(error.message));
  }, []);
  return (
    <Fieldset title="Select your position">
      {error && <p>{`${error}. Please reload the page.`}</p>}
      {positions.map(position => (
        <InputRadio
          key={position.id}
          name="position"
          label={position.name}
          onChange={onChange}
          isChecked={positionCurrent === position.name}
        />
      ))}
    </Fieldset>
  );
};

export default Positions;
