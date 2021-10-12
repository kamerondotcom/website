import React, { createContext, useEffect, useReducer, useContext } from "react";

const modeData = {
  isLight: !(new Date().getHours() > 17 && new Date().getHours() > 6),
};

console.log("modeData", modeData, new Date().getHours());

export const ModesContext = createContext({});

export const modesReducer = (state, action) => {
  switch (action.type) {
    case "SET_MODE": {
      return {
        ...state,
        isLight: action.payload,
      };
    }
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

  useEffect(() => {
    dispatch({
      type: "SET_MODE",
      payload: !(new Date().getHours() > 17 && new Date().getHours() > 6),
    });
    setTimeout(() => {
      //   dispatch({
      //     type: "SET_MODE",
      //     payload: !(new Date().getHours() > 17 && new Date().getHours() > 6),
      //   });
    }, 100);
    return () => {
      // clearInterval(timer);
    };
  }, []);

  return (
    <ModesContext.Provider value={{ state, dispatch }}>
      {children}
    </ModesContext.Provider>
  );
};

export const useModeState = () => {
  return useContext(ModesContext);
};
