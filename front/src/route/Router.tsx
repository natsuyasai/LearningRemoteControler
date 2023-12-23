import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { RemoteControler } from "../views/remote-controler/RemoteControler";
import { Setting } from "../views/setting/Setting";
import { Error } from "../views/error/Error";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RemoteControler />} />
      <Route path="/remotecontroler" element={<RemoteControler />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
