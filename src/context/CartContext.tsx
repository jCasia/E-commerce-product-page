import { useReducer, createContext, ReactNode, FC } from 'react';
import { REDUCER_ACTION_TYPE } from '../utils/enum';

type StateType = {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  isLightboxOpen: boolean;
};

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const initialState = {
  isMenuOpen: false,
  isCartOpen: false,
  isLightboxOpen: false,
};

const reducer = (
  state: StateType,
  action: ReducerAction
): typeof initialState => {
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

  return (
    <CartContext.Provider
      value={{
        openMenu,
        closeMenu,
        toggleCart,
        openLightbox,
        closeLightbox,

        state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
