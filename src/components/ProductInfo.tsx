import { FC } from 'react';
import AddToCart from './addToCart';

const ProductInfo: FC = () => {
  return (
    <div className='flex flex-col gap-2 p-5'>
      <p className='font-bold text-colorOrange uppercase'>Sneaker Company</p>
      <h2 className='font-bold text-veryDarkBlue text-3xl'>
        Fall Limited Edition Sneakers
      </h2>
      <p className='text-darkGrayBlue'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <p className='text-2xl font-bold'>$125.00</p>
          <p className='font-bold bg-paleOrange text-colorOrange px-1.5 rounded-lg'>
            50%
          </p>
        </div>
        <p className='text-grayBlue line-through'>$250.00</p>
      </div>
      <AddToCart />
    </div>
  );
};

export default ProductInfo;
