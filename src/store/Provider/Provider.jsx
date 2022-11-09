import React, { createContext, useEffect, useState } from "react";
export const Mycontext = createContext();
const Provider = ({ children }) => {
  const [context, setContext] = useState([]);
  useEffect(() => {
    const Importing = async () => {
      const data = await fetch("data.json");
      const response = await data.json();
      setContext(response.employee);
    };
    Importing();
  }, []);
  console.log("context", context);
  const reducer = (state, action) => {
    switch (action.type) {
      case "NEWMSGCLICK":
        const msgpayload = action.newmsgClick;

        return { ...state, msgClick: msgpayload };
    }
  };
  const [state, dispatch] = React.useReducer(reducer, context);
  console.log("state", state);
  const value = {
    ...state,
    newMessageClick: (newmsgClick) => {
      console.log("newMessageClick value provider", newmsgClick);
      dispatch({ type: "NEWMSGCLICK", newmsgClick });
    },
  };

  return <Mycontext.Provider value={value}>{children}</Mycontext.Provider>;
};

export default Provider;
