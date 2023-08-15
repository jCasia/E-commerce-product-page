import { FC, useState } from 'react';
import { LightboxProps } from '../interfaces/LightBoxProps';
import close from '../images/icon-close.svg';
import rightArrow from '../images/icon-next.svg';
import leftArrow from '../images/icon-previous.svg';

const LightBox: FC<LightboxProps> = ({ images, imagesThumbnail }) => {
  const [lightboxMain, setLightboxMain] = useState(images[0]);

  return (
    <div className='fixed top-0 right-0 w-full h-screen grid place-items-center hidden'>
      <div className='absolute top-0 right-0 bg-black/80 w-full h-screen -z-10'></div>
      <div className='w-[85%] flex flex-col gap-5'>
        <button type='button' aria-label='close' className='self-end'>
          <img src={close} alt='close' className='brightness-200 sepia' />
        </button>
        <div className='relative'>
          <img
            src={lightboxMain}
            alt='test'
            className='object-cover max-w-full rounded-xl'
          />
          <button
            aria-label='next'
            className='absolute top-1/2 -right-4 -translate-y-1/2 bg-colorWhite w-9 h-9 rounded-full grid place-items-center '
          >
            <img src={rightArrow} alt='next' className='w-2/6' />
          </button>
          <button
            aria-label='previous'
            className='absolute top-1/2 -left-4 -translate-y-1/2 bg-colorWhite w-9 h-9 rounded-full grid place-items-center'
          >
            <img
              src={leftArrow}
              alt='previous'
              className='w-2/6 -translate-x-0.5'
            />
          </button>
        </div>
        {/* mini images clicked change main image */}
        <div className='flex gap-3 justify-center'>
          {imagesThumbnail.map((image, index) => {
            return (
              <img
                src={image}
                alt={image}
                key={index}
                className='w-16 rounded-lg cursor-pointer'
                onClick={() => setLightboxMain(images[index])}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LightBox;
