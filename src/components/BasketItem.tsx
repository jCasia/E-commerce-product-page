import { FC } from 'react';
import deleteImg from '../images/icon-delete.svg';
import { useCartContext } from '../hooks/useCartContext';
import { reducedPrice } from '../utils/helpers';

const BasketItem: FC = () => {
  const {
    state: { cart },
    removeItem,
  } = useCartContext();
  const { name, image, price, amount, discount } = cart[0];

  return (
    <div className='flex items-center gap-4'>
      <img src={image} alt='dummyImg' className='w-2/12 rounded-md' />
      <div className='flex-1'>
        <p className='text-sm smobile:text-base'>{name}</p>
        <p className='text-sm smobile:text-base'>
          £{reducedPrice(price, discount).toFixed(2)} x {amount}
          <span className='font-bold ml-1'>
            £{(reducedPrice(price, discount) * amount).toFixed(2)}
          </span>
        </p>
      </div>
      <button
        type='button'
        aria-label='delete'
        onClick={() => removeItem(name)}
      >
        <img src={deleteImg} alt='delete' />
      </button>
    </div>
  );
};

export default BasketItem;
