import { FC } from 'react';
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import cartImg from '../images/icon-cart.svg';
import Nav from './Nav';
import Basket from './Basket';
import { useCartContext } from '../hooks/useCartContext';

const Header: FC = () => {
  const {
    toggleCart,
    state: { cart },
  } = useCartContext();

  return (
    <header className='flex justify-between p-4 relative w-full max-w-[1115px] m-auto mmobile:p-5 border-b mtablet:p-7 laptop:py-8 laptop:px-0'>
      <div className='flex items-center gap-8 font-light laptop:gap-14'>
        <Nav />
        <img src={logo} alt='logo' className='w-3/5 mmobile:w-4/5' />
      </div>
      <div className='flex items-center justify-end gap-4 slaptop:gap-9 '>
        <button type='button' className='relative' onClick={toggleCart}>
          <img
            src={cartImg}
            alt='cart logo'
            className='w-full hover:brightness-0 transition-all duration-300'
          />

          <span
            className={`absolute -top-1.5 -right-1.5 font-bold bg-colorOrange text-colorWhite text-[.6rem] w-5 rounded-3xl ${
              cart.length >= 1 ? 'opacity-1 visible' : 'opacity-0 invisible'
            }`}
          >
            {cart.length}
          </span>
        </button>
        <button type='button' className='relative'>
          <img
            src={avatar}
            alt='avatar picture'
            className='w-7 mtablet:w-11 cursor-pointer rounded-full hover:border hover:border-colorOrange'
          />
        </button>
      </div>
      <Basket />
    </header>
  );
};

export default Header;
