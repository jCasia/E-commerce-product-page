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
    <header className='flex justify-between p-5 relative w-full'>
      <div className='flex items-center gap-4'>
        <Nav />
        <img src={logo} alt='logo' />
      </div>
      <div className='flex items-center justify-end flex-1 gap-4 '>
        <button type='button' className='relative' onClick={toggleCart}>
          <img src={cartImg} alt='cart logo' className='w-full' />

          <span
            className={`absolute -top-1.5 -right-1.5 font-bold bg-colorOrange text-colorWhite text-[.6rem] w-5 rounded-3xl ${
              cart.length >= 1 ? 'opacity-1 visible' : 'opacity-0 invisible'
            }`}
          >
            {cart.length}
          </span>
        </button>
        <button type='button'>
          <img src={avatar} alt='avatar picture' className='w-7' />
        </button>
      </div>
      <Basket />
    </header>
  );
};

export default Header;
