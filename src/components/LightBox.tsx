import { FC, useState } from 'react';
import { LightboxProps } from '../interfaces/LightBoxProps';
import close from '../images/icon-close.svg';
import rightArrow from '../images/icon-next.svg';
import leftArrow from '../images/icon-previous.svg';
import { useCartContext } from '../hooks/useCartContext';

const LightBox: FC<LightboxProps> = ({ images, imagesThumbnail }) => {
  const [lightboxMain, setLightboxMain] = useState(images[0]);
  const [lightboxSlideIndex, setLightboxSlideIndex] = useState(0);

  console.log(lightboxMain);

  const {
    state: { isLightboxOpen },
    closeLightbox,
  } = useCartContext();

  const nextSlide = (): void => {
    const newSlide: number =
      lightboxSlideIndex === images.length - 1 ? 0 : lightboxSlideIndex + 1;

    setLightboxMain(images[newSlide]);
    setLightboxSlideIndex(newSlide);
  };
  const backSlide = (): void => {
    const newSlide: number =
      lightboxSlideIndex === 0 ? images.length - 1 : lightboxSlideIndex - 1;
    setLightboxMain(images[newSlide]);
    setLightboxSlideIndex(newSlide);
  };

  const thumbnailImageChange = (image: string, index: number): void => {
    setLightboxMain(image);
    setLightboxSlideIndex(index);
  };

  return (
    <div
      className={`fixed top-0 right-0 w-full h-screen grid place-items-center transition-all duration-300 ${
        isLightboxOpen ? 'opacity-1 visible' : 'invisible opacity-0'
      }`}
    >
      <div className='absolute top-0 right-0 bg-black/80 w-full h-screen -z-10'></div>
      <div className='w-[80%] flex flex-col gap-6 max-w-[500px] '>
        <button
          type='button'
          aria-label='close'
          className='self-end '
          onClick={closeLightbox}
        >
          <img
            src={close}
            alt='close'
            className='brightness-200 sepia hover:brightness-150 transition-all duration-300'
          />
        </button>
        <div className='relative'>
          <img
            src={lightboxMain}
            alt='test'
            className='object-cover max-w-full rounded-xl'
          />
          <button
            aria-label='next'
            className='absolute top-1/2 -right-4 -translate-y-1/2 bg-colorWhite w-9 h-9 rounded-full grid place-items-center tablet:w-11 tablet:h-11 group'
            onClick={nextSlide}
          >
            <img
              src={rightArrow}
              alt='next'
              className='w-2/6 group-hover:sepia group-hover:brightness-150 transition-all duration:300'
            />
          </button>
          <button
            aria-label='previous'
            className='absolute top-1/2 -left-4 -translate-y-1/2 bg-colorWhite w-9 h-9 rounded-full grid place-items-center tablet:w-11 tablet:h-11 group'
            onClick={backSlide}
          >
            <img
              src={leftArrow}
              alt='previous'
              className='w-2/6 -translate-x-0.5 group-hover:sepia group-hover:brightness-150 transition-all duration:300'
            />
          </button>
        </div>
        <div className='flex gap-3 justify-center tablet:gap-6'>
          {imagesThumbnail.map((image, index) => {
            return (
              <img
                src={image}
                alt={image}
                key={index}
                className={`w-12 rounded-lg cursor-pointer smobile:w-14 mmobile:w-16 stablet:w-20 ${
                  index === lightboxSlideIndex
                    ? 'border-2 border-colorOrange contrast-50 saturate-150'
                    : ''
                }hover:contrast-50 hover:saturate-150 transition-all duration:300`}
                onClick={() => thumbnailImageChange(images[index], index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LightBox;
