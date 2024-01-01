import { FC } from "react";
import Button from "@mui/material/Button";
import styles from "./RemoteControlerButton.module.scss";

export interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

export const RemoteControlerButton: FC<ButtonProps> = ({ buttonText, onClick }) => {
  return (
    <Button className={styles.button} variant="contained" onClick={onClick}>
      <span>{buttonText}</span>
    </Button>
  );
};
