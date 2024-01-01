import { FC } from "react";
import { ButtonProps, RemoteControlerButton } from "./RemoteControlerButton";
import styles from "./RemoteControlerGroup.module.scss";

interface GroupProps {
  buttonProps: Array<ButtonProps>;
}

export const RemoteControlerGroup: FC<GroupProps> = ({ buttonProps = [] }) => {
  const buttons = buttonProps.map((item) => {
    return (
      <div className={styles.buttonPadding} key={item.buttonText}>
        <RemoteControlerButton buttonText={item.buttonText} onClick={item.onClick} />
      </div>
    );
  });
  return buttons;
};
