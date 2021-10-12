import React, { createContext, useReducer, useContext } from "react";

const modeData = {
  isLight: !(new Date().getHours() > 17 && new Date().getHours() > 6),
};

console.log("modeData", modeData);

export const ModesContext = createContext({});

export const modesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODE": {
      return {
        ...state,
        isLight: !state.isLight,
      };
    }

    default: {
      return state;
    }
  }
};

export const ModesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modesReducer, modeData);

  return (
    <ModesContext.Provider value={{ state, dispatch }}>
      {children}
    </ModesContext.Provider>
  );
};

export const useModeState = () => {
  return useContext(ModesContext);
};
