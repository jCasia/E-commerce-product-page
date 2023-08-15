import { FC } from 'react';
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';
import cartImg from '../images/icon-cart.svg';
import Nav from './Nav';
import Basket from './Basket';

const Header: FC = () => {
  return (
    <header className='flex justify-between p-5 relative w-full'>
      <div className='flex items-center gap-4'>
        <Nav />
        <img src={logo} alt='logo' />
      </div>
      <div className='flex items-center justify-end flex-1 gap-4 '>
        <button type='button' className='relative'>
          <img src={cartImg} alt='cart logo' className='w-full' />
          {/* conditional, show only if there is anything in cart */}
          <span className='absolute -top-1.5 -right-1.5 font-bold bg-colorOrange text-colorWhite text-[.6rem] w-5 rounded-3xl'>
            3
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
