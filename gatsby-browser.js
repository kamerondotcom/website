import React from "react";
import { ModesProvider } from "./src/context/modes";
export const wrapRootElement = ({ element }) => (
  <ModesProvider>{element}</ModesProvider>
);
