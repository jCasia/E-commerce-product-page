import { FC, useState } from 'react';
import { imagesThumbnail } from '../data';
import { images } from '../data';
import rightArrow from '../images/icon-next.svg';
import leftArrow from '../images/icon-previous.svg';
import LightBox from './LightBox';

const ProductImages: FC = () => {
  const [main, setMain] = useState(images[0]);

  const changeImg = (index: number): void => {
    setMain(images[index]);
  };
  return (
    <div className='flex flex-col gap-5'>
      <div className='relative'>
        <img src={main} alt='test' className='object-cover max-w-full' />
        <button
          aria-label='next'
          className='absolute top-1/2 right-4 -translate-y-1/2 bg-colorWhite w-9 h-9 rounded-full grid place-items-center tablet:hidden '
        >
          <img src={rightArrow} alt='next' className='w-2/6' />
        </button>
        <button
          aria-label='previous'
          className='absolute top-1/2 left-4 -translate-y-1/2 bg-colorWhite w-9 h-9 rounded-full grid place-items-center tablet:hidden'
        >
          <img
            src={leftArrow}
            alt='previous'
            className='w-2/6 -translate-x-0.5'
          />
        </button>
      </div>
      <div className='hidden tablet:flex gap-3 justify-center'>
        {imagesThumbnail.map((image, index) => {
          return (
            <img
              src={image}
              alt={image}
              key={index}
              className='w-16 rounded-lg cursor-pointer'
              onClick={() => changeImg(index)}
            />
          );
        })}
      </div>
      <LightBox images={images} imagesThumbnail={imagesThumbnail} />
    </div>
  );
};

export default ProductImages;
