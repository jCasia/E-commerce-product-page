import { FC } from 'react';
import dummyImage from '../images/image-product-1.jpg';
import rightArrow from '../images/icon-next.svg';
import leftArrow from '../images/icon-previous.svg';

const ProductImages: FC = () => {
  return (
    <div className='relative'>
      <img src={dummyImage} alt='test' className='object-cover max-w-full' />
      <button
        aria-label='next'
        className='absolute top-1/2 right-4 -translate-y-1/2 bg-colorWhite w-9 h-9 rounded-full grid place-items-center '
      >
        <img src={rightArrow} alt='next' className='w-2/6' />
      </button>
      <button
        aria-label='previous'
        className='absolute top-1/2 left-4 -translate-y-1/2 bg-colorWhite w-9 h-9 rounded-full grid place-items-center'
      >
        <img
          src={leftArrow}
          alt='previous'
          className='w-2/6 -translate-x-0.5'
        />
      </button>
    </div>
  );
};

export default ProductImages;
