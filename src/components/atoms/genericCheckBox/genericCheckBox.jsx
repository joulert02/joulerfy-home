import React from "react";
import "./genericCheckBox.scss";

const GenericCheckBox = ({ name, labelValue, className, onClick }) => {
  return (
    <div
      className={"checkbox-container ".concat(
        className !== undefined ? className : ""
      )}
    >
      <input
        type="checkbox"
        name={name}
        id="triggerCheck"
        className={"css-checkbox "}
        onClick={onClick}
      />
      <label htmlFor="triggerCheck" className="css-label">
        {labelValue}
      </label>
    </div>
  );
};

export default GenericCheckBox;
