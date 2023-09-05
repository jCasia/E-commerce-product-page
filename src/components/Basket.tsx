import { FC } from 'react';
import BasketItem from './BasketItem';
import { useCartContext } from '../hooks/useCartContext';

const Basket: FC = () => {
  const {
    state: { isCartOpen, cart },
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
        className={`absolute z-10 top-20 right-2 w-[95%] bg-white px-4 pb-7 pt-4 rounded-lg flex flex-col gap-5 justify-center shadow-2xl mtablet:w-3/5 mtablet:shadow-2xl mtablet:top-18 tablet:w-1/2 slaptop:w-2/5 laptop:w-4/12 laptop:-right-10 slaptop:px-5 transition-all duration-300 ${
          isCartOpen ? 'opacity-1 visible' : 'opacity-0 invisible'
        }`}
      >
        <p className='font-bold'>Cart</p>
        <div className='w-full h-[.25px] bg-grayBlue'></div>
        <div className='flex gap-5 flex-col'>
          {cart.length > 0 ? (
            <BasketItem />
          ) : (
            <h2 className='text-center'> Your Cart is empty.</h2>
          )}
        </div>

        <button
          type='button'
          className='flex gap-4 w-full justify-center bg-colorOrange text-colorWhite p-3 rounded-lg disabled:opacity-50'
          disabled={cart.length < 1}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Basket;
