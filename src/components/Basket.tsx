import { FC } from 'react';
import BasketItem from './BasketItem';

const Basket: FC = () => {
  return (
    <div className='absolute z-10 top-20 right-3 w-[95%] bg-white px-4 pb-7 pt-4 rounded-lg flex flex-col gap-5 justify-center shadow-lg '>
      <p className='font-bold'>Cart</p>
      <div className='w-full h-[.25px] bg-grayBlue'></div>
      <div className='flex gap-5 flex-col'>
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
  );
};

export default Basket;
