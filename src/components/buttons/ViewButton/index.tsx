import * as React from "react";
import "./ViewButton.css";

type ButtonProps = {
  buttonText: string;
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  classNameActive: boolean;
};

const PrimaryButton: React.FC<ButtonProps> = ({
  buttonText,
  onClickHandler,
  classNameActive = true,
}: ButtonProps) => (
  <button
    className={`ButtonMain ${classNameActive ? "ButtonNormal" : "ButtonActive"}`}
    onClick={onClickHandler}
  >
    {buttonText}
  </button>
);

export default PrimaryButton;
