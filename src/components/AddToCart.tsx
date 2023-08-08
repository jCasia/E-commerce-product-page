import { FC } from 'react';
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';
import cart from '../images/icon-cart.svg';

const AddToCart: FC = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex justify-between bg-lightGrayBlue p-3 rounded-lg items-center'>
        <button type='button' aria-label='minus' className='p-2'>
          <img src={minus} alt='minus' />
        </button>
        <p className='text-veryDarkBlue font-bold'>2</p>
        <button type='button' aria-label='plus' className='p-2'>
          <img src={plus} alt='plus' />
        </button>
      </div>
      <button
        type='button'
        className='flex gap-4 justify-center bg-colorOrange text-colorWhite p-3 rounded-lg'
      >
        <img src={cart} alt='cart' className='brightness-200 sepia' />
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
