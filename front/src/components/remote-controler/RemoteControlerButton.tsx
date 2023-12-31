import React, { FC } from "react";
import Button from "@mui/material/Button";
//import styles from "./Setting.module.scss";

export interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

export const RemoteControlerButton: FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {buttonText}
    </Button>
  );
};
