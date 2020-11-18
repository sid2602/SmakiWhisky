import React, {
  useReducer,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";
const CartStateContext = createContext();
const CartDispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const findItem = state.find((item) => item.id === action.item.id);
      if (findItem) {
        const copyOfState = state.map((item) => {
          item.id === action.item.id
            ? (item.quantity += action.item.quantity)
            : item.quantity;

          return item;
        });
        localStorage.setItem("products", JSON.stringify(copyOfState));
        return copyOfState;
      } else {
        localStorage.setItem(
          "products",
          JSON.stringify([...state, action.item])
        );
        return [...state, action.item];
      }

    case "CHANGE":
      const copyOfState = state.map((item, id) => {
        id == action.id ? (item.quantity = action.value) : item.quantity;
        return item;
      });

      localStorage.setItem("products", JSON.stringify(copyOfState));
      return copyOfState;

    case "REMOVE":
      const CopyOfState = state;
      CopyOfState.splice(action.id, 1);
      window.location.reload(false);
      localStorage.setItem("products", JSON.stringify(CopyOfState));

      return CopyOfState;

    case "REMOVEALL":
      localStorage.removeItem("products");
      window.location.replace("http://localhost:3000/");
      return [];

    default:
      throw new Error();
  }
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const item = window.localStorage.getItem("products");

      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });

  const [state, dispatch] = useReducer(reducer, cartItems);
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
