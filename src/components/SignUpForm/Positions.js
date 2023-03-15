import { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
      {positions.map(position => {
        return (
          <InputRadio
            key={position.id}
            id={position.id}
            value={position.name}
            name="position"
            label={position.name}
            onChange={onChange}
            isChecked={positionCurrent.name === position.name}
          />
        );
      })}
    </Fieldset>
  );
};

Positions.prototype = {
  positionCurrent: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Positions;
