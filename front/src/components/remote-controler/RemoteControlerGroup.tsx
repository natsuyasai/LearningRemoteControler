import { FC } from "react";
import { ButtonProps, RemoteControlerButton } from "./RemoteControlerButton";

interface GroupProps {
  buttonProps: Array<ButtonProps>;
}

export const RemoteControlerGroup: FC<GroupProps> = ({ buttonProps = [] }) => {
  const buttons = buttonProps.map((item) => {
    return <RemoteControlerButton 
    buttonText={item.buttonText} 
    onClick={item.onClick} />;
  });
  return buttons;
};
