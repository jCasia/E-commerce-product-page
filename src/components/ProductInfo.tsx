import { FC } from 'react';
import AddToCart from './AddToCart';
import { data } from '../data';
import { reducedPrice } from '../utils/helpers';

const { name, description, price, discount, imagesThumbnail } = data[0];

const ProductInfo: FC = () => {
  return (
    <div className='flex flex-col gap-2 p-5 slaptop:gap-6 slaptop:py-12 px-9 '>
      <p className='font-bold text-colorOrange uppercase slaptop:text-[.95rem]'>
        Sneaker Company
      </p>
      <h2 className='font-bold text-veryDarkBlue text-3xl slaptop:text-[2.75rem] slaptop:leading-[2.75rem] slaptop:mb-2'>
        {name}
      </h2>
      <p className='text-darkGrayBlue'>{description}</p>
      <div className='flex justify-between items-center slaptop:flex-col slaptop:items-start slaptop:gap-1'>
        <div className='flex gap-4 items-center'>
          <p className='text-2xl font-bold slaptop:text-3xl'>
            £{reducedPrice(price, discount).toFixed(2)}
          </p>
          <p className='font-bold bg-paleOrange text-colorOrange px-1.5 rounded-lg'>
            {discount}%
          </p>
        </div>
        <p className='text-grayBlue line-through '>£{price.toFixed(2)}</p>
      </div>
      <AddToCart
        name={name}
        price={price}
        image={imagesThumbnail[0]}
        discount={discount}
      />
    </div>
  );
};

export default ProductInfo;
