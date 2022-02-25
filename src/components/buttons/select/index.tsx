import React from "react";
import "./select.css";

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

const Select: React.FC<{ keyWord: string ; setKeyWord: any }> = ({
  keyWord = "angular",
  setKeyWord,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setKeyWord(event.target.value);
  };

  return (
    <div className="selectContainer">
      <select value={keyWord} onChange={(e) => handleChange(e)}>
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
