import { FC } from 'react';
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';
import { BsCart3 } from 'react-icons/bs';
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
    <div className='flex flex-col gap-3 slaptop:flex-row'>
      <div className='flex justify-between bg-lightGrayBlue p-3 rounded-lg items-center slaptop:basis-1/3'>
        <button
          type='button'
          aria-label='minus'
          className='p-2 group'
          onClick={decrease}
        >
          <img
            src={minus}
            alt='minus'
            className='group-hover:brightness-150 transition-all duration-300'
          />
        </button>
        <p className='text-veryDarkBlue font-bold'>{amount}</p>
        <button
          type='button'
          aria-label='plus'
          className='p-2 group'
          onClick={increase}
        >
          <img
            src={plus}
            alt='plus'
            className='group-hover:brightness-150 transition-all duration-300'
          />
        </button>
      </div>
      <button
        type='button'
        className='flex gap-4 justify-center items-center bg-colorOrange text-colorWhite p-3 rounded-lg font-bold shadow-xl shadow-colorOrange/30 slaptop:basis-2/3 hover:bg-colorOrange/75 transition-all duration-300'
        onClick={() => addToCart(name, image, price, amount, discount)}
      >
        <BsCart3 className='w-4 ' />
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
