import React,{useState} from "react";
import PrimaryButton from "../buttons/selectViewButton";
import "./selectPageToggle.css";

const PageToggle = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="toggleContainer">
      <PrimaryButton classNameActive={active} onClickHandler={() => setActive(false)}  buttonText="All" />{" "}
      <PrimaryButton classNameActive={!active} onClickHandler={() => setActive(true)} buttonText="Favorite" />
    </div>
  );
};

export default PageToggle;
