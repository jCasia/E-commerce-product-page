import { FC } from 'react';
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';
import cart from '../images/icon-cart.svg';
import { useCartContext } from '../hooks/useCartContext';
import { AddToCartProps } from '../interfaces/AddToCartProps';

const AddToCart: FC<AddToCartProps> = ({ image, name, price, discount }) => {
  const {
    addToCart,
    state: { amount },
    increase,
    decrease,
  } = useCartContext();

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex justify-between bg-lightGrayBlue p-3 rounded-lg items-center'>
        <button
          type='button'
          aria-label='minus'
          className='p-2'
          onClick={decrease}
        >
          <img src={minus} alt='minus' />
        </button>
        <p className='text-veryDarkBlue font-bold'>{amount}</p>
        <button
          type='button'
          aria-label='plus'
          className='p-2'
          onClick={increase}
        >
          <img src={plus} alt='plus' />
        </button>
      </div>
      <button
        type='button'
        className='flex gap-4 justify-center bg-colorOrange text-colorWhite p-3 rounded-lg'
        onClick={() => addToCart(name, image, price, amount, discount)}
      >
        <img src={cart} alt='cart' className='brightness-200 sepia' />
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
