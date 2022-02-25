import React from "react";
import PrimaryButton from "../buttons/ViewButton";
import "./selectPageToggle.css";

const PageToggle: React.FC<{ active: boolean; setActive: any }> = ({
  active,
  setActive,
}) => {
  return (
    <div className="toggleContainer">
      <PrimaryButton
        classNameActive={!active}
        onClickHandler={() => setActive(true)}
        buttonText="All"
      />{" "}
      <PrimaryButton
        classNameActive={active}
        onClickHandler={() => setActive(false)}
        buttonText="Favorite"
      />
    </div>
  );
};

export default PageToggle;
