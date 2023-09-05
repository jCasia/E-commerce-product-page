import { FC, useState } from 'react';
import { data } from '../data';
import rightArrow from '../images/icon-next.svg';
import leftArrow from '../images/icon-previous.svg';
import LightBox from './LightBox';
import { useCartContext } from '../hooks/useCartContext';

const { images, imagesThumbnail } = data[0];

const ProductImages: FC = () => {
  const { openLightbox } = useCartContext();
  const [main, setMain] = useState(images[0]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const changeImg = (index: number): void => {
    setMain(images[index]);
    setCurrentSlideIndex(index);
  };

  const nextSlide = (): void => {
    const newSlide: number =
      currentSlideIndex === images.length - 1 ? 0 : currentSlideIndex + 1;

    setMain(images[newSlide]);
    setCurrentSlideIndex(newSlide);
  };
  const backSlide = (): void => {
    const newSlide: number =
      currentSlideIndex === 0 ? images.length - 1 : currentSlideIndex - 1;
    setMain(images[newSlide]);
    setCurrentSlideIndex(newSlide);
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className='relative'>
        <img
          src={main}
          alt='test'
          className='object-cover max-w-full cursor-pointer stablet:rounded-2xl'
          onClick={openLightbox}
        />
        <button
          aria-label='next'
          className='absolute top-1/2 right-4 -translate-y-1/2 bg-colorWhite w-9 h-9 rounded-full grid place-items-center tablet:hidden '
          onClick={nextSlide}
        >
          <img src={rightArrow} alt='next' className='w-2/6' />
        </button>
        <button
          aria-label='previous'
          className='absolute top-1/2 left-4 -translate-y-1/2 bg-colorWhite w-9 h-9 rounded-full grid place-items-center tablet:hidden'
          onClick={backSlide}
        >
          <img
            src={leftArrow}
            alt='previous'
            className='w-2/6 -translate-x-0.5'
          />
        </button>
      </div>
      <div className='hidden tablet:flex gap-3 justify-center slaptop:justify-between slaptop:gap-0'>
        {imagesThumbnail.map((image, index) => {
          return (
            <img
              src={image}
              alt={image}
              key={index}
              className={`w-16 rounded-lg cursor-pointer ${
                index === currentSlideIndex
                  ? 'border border-colorOrange contrast-50 saturate-150'
                  : ''
              } hover:contrast-50 hover:saturate-150 transition-all duration:300 slaptop:w-20 `}
              onClick={() => changeImg(index)}
            />
          );
        })}
      </div>
      <LightBox imagesThumbnail={imagesThumbnail} images={images} />
    </div>
  );
};

export default ProductImages;
