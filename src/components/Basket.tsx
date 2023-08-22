import { FC } from 'react';
import BasketItem from './BasketItem';
import { useCartContext } from '../hooks/useCartContext';

const Basket: FC = () => {
  const {
    state: { isCartOpen },
    toggleCart,
  } = useCartContext();

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-screen  z-10 ${
          isCartOpen ? 'opacity-1 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleCart}
      ></div>

      <div
        className={`absolute z-10 top-20 right-0 mx-2.5 bg-white px-4 pb-7 pt-4 rounded-lg flex flex-col gap-5 justify-center shadow-lg transition-all duration-300 ${
          isCartOpen ? 'opacity-1 visible' : 'opacity-0 invisible'
        }`}
      >
        <p className='font-bold'>Cart</p>
        <div className='w-full h-[.25px] bg-grayBlue'></div>
        <div className='flex gap-5 flex-col'>
          {/* need to map this  */}
          <BasketItem />
          <BasketItem />
        </div>

        <button
          type='button'
          className='flex gap-4 w-full justify-center bg-colorOrange text-colorWhite p-3 rounded-lg'
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Basket;
