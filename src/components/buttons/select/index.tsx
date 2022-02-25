import React, { useState } from "react";
import "./select.css";

type ButtonProps = {
  onChangeHandler?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const selectOptions = [
  {
    value: "angular",
    label: "Angular",
    icon: "../..assets/images/angular.png",
  },
  {
    value: "react",
    label: "React",
    icon: "../../assets/images/react.png",
  },
  {
    value: "vue",
    label: "Vue",
    icon: "../../assets/images/vue.png",
  },
];

const Select: React.FC<ButtonProps> = ({ onChangeHandler }: ButtonProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const [value, setValue] = useState("angular");

  return (
    <div className="selectContainer">
      <select value={value} onChange={(e) => handleChange(e)}>
        {selectOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
