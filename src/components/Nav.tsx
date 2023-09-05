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
      <ul className='hidden tablet:flex gap-4 font-bold text-darkGrayBlue laptop:gap-6 '>
        {links.map((link, index) => {
          return (
            <li key={index} className='relative  '>
              <a
                href='#'
                className='hover:text-veryDarkBlue after:content-[""] after:bg-colorOrange after:h-0 after:w-full after:absolute after:-bottom-[42px] after:left-0 hover:after:h-1 after:transition-all after:duration-300 '
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
