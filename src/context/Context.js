import { createContext } from "react";

const Cart = createContext();

const Context = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export default Context;
