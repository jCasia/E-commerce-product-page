import { useReducer, createContext, ReactNode, FC } from 'react';
import { REDUCER_ACTION_TYPE } from '../utils/enum';

type cartItemType = {
  name: string;
  image: string;
  price: number;
  amount: number;
  discount: number;
};

type ReducerAction =
  | {
      type: REDUCER_ACTION_TYPE;
      payload?: cartItemType;
    }
  | { type: 'REMOVE_ITEM'; payload: { name: string } };

type StateType = {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  isLightboxOpen: boolean;
  cart: Array<cartItemType>;
  amount: number;
};

const initialState: StateType = {
  isMenuOpen: false,
  isCartOpen: false,
  isLightboxOpen: false,
  cart: [],
  amount: 1,
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
  if (action.type === REDUCER_ACTION_TYPE.OPEN_MENU) {
    return { ...state, isMenuOpen: true };
  }
  if (action.type === REDUCER_ACTION_TYPE.CLOSE_MENU) {
    return { ...state, isMenuOpen: false };
  }
  if (action.type === REDUCER_ACTION_TYPE.TOGGLE_CART) {
    return { ...state, isCartOpen: !state.isCartOpen };
  }
  if (action.type === REDUCER_ACTION_TYPE.OPEN_LIGHTBOX) {
    return { ...state, isLightboxOpen: true };
  }
  if (action.type === REDUCER_ACTION_TYPE.CLOSE_LIGHTBOX) {
    return { ...state, isLightboxOpen: false };
  }
  if (action.type === REDUCER_ACTION_TYPE.INCREASE) {
    return { ...state, amount: state.amount + 1 };
  }
  if (action.type === REDUCER_ACTION_TYPE.DECREASE) {
    return { ...state, amount: state.amount - 1 };
  }

  if (action.type === REDUCER_ACTION_TYPE.ADD_TO_CART) {
    if (action.payload) {
      const { name, image, price, amount, discount } = action.payload;
      console.log(action.payload);

      const tempItem = state.cart.find((item) => item.name === name);

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.name === name) {
            const newAmount = cartItem.amount + amount;
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });

        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          name: name,
          image: image,
          price: price,
          amount: amount,
          discount: discount,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    if (action.payload) {
      const { name } = action.payload;
      const tempCart = state.cart.filter((item) => item.name !== name);
      return { ...state, cart: tempCart };
    }
  }

  throw new Error(`No matching "${action.type}" action type`);
};

//////context

const initContextState = {
  state: initialState,
  //function just need to be initialised
  openMenu: () => {},
  closeMenu: () => {},
  toggleCart: () => {},
  openLightbox: () => {},
  closeLightbox: () => {},
  increase: () => {},
  decrease: () => {},
  addToCart: (
    _name: string,
    _image: string,
    _price: number,
    _amount: number,
    _discount: number
  ) => {},
  removeItem: (_name: string) => {},
};

export const CartContext = createContext(initContextState);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openMenu = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.OPEN_MENU });
  };

  const closeMenu = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.CLOSE_MENU });
  };

  const toggleCart = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.TOGGLE_CART });
  };

  const openLightbox = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.OPEN_LIGHTBOX });
  };

  const closeLightbox = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.CLOSE_LIGHTBOX });
  };

  const increase = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREASE });
  };
  const decrease = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREASE });
  };

  const addToCart = (
    name: string,
    image: string,
    price: number,
    amount: number,
    discount: number
  ) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.ADD_TO_CART,
      payload: { name, image, price, amount, discount },
    });
  };

  const removeItem = (name: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { name } });
  };

  return (
    <CartContext.Provider
      value={{
        openMenu,
        closeMenu,
        toggleCart,
        openLightbox,
        closeLightbox,
        addToCart,
        removeItem,
        increase,
        decrease,
        state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
