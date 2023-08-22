import { FC } from 'react';
import menuBar from '../images/icon-menu.svg';
import { links } from '../data';
import { useCartContext } from '../hooks/useCartContext';

const Nav: FC = () => {
  const { openMenu } = useCartContext();
  return (
    <nav className='tablet:order-2'>
      <button
        aria-label='menu'
        className='tablet:hidden translate-y-1'
        onClick={openMenu}
      >
        <img src={menuBar} alt='menu' className='w-5' />
      </button>
      {/* desktop links */}
      <ul className='hidden tablet:flex gap-4 font-bold text-darkGrayBlue'>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href='#'>{link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
