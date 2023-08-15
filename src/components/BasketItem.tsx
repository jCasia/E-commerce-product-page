import { FC } from 'react';
import deleteImg from '../images/icon-delete.svg';
import dummyImg from '../images/image-product-1-thumbnail.jpg';

const BasketItem: FC = () => {
  return (
    <div className='flex items-center gap-4'>
      <img src={dummyImg} alt='dummyImg' className='w-2/12 rounded-md' />
      <div className='flex-1'>
        <p>Fall Limited Edition Sneakers</p>
        <p>
          $125.00 x 3 <span className='font-bold'>$375.00</span>
        </p>
      </div>
      <button type='button' aria-label='delete'>
        <img src={deleteImg} alt='delete' />
      </button>
    </div>
  );
};

export default BasketItem;
