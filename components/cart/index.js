import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const findItem = state.find((item) => item.id === action.item.id);
      if (findItem) {
        // console.log(findItem);
        const copyOfState = state.map((item) => {
          item.id === action.item.id
            ? (item.quantity += action.item.quantity)
            : item.quantity;

          return item;
        });
        return copyOfState;
      } else return [...state, action.item];
    case "CHANGE":
      const Item = state[action.id];
      console.log(Item);
      return [...state];
    default:
      throw new Error();
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children};
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
