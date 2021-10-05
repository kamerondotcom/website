import React, { createContext, useReducer, useContext } from "react";

//This is the default settings for your chat app.
const modeData = {
  isLight: true,
};

export const ModesContext = createContext({});

//The functions below are accessible through passing parameters to a dispatch function always accessible in our components.
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
