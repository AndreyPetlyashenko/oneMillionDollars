// components/Layout.js

import { Props } from "./types";
import { FC } from "react";

const Layout: FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
