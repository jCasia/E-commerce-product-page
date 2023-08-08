import { FC } from 'react';
import menuBar from '../images/icon-menu.svg';
import { links } from '../data';
//just use react icons so much easier for menu bar

const Nav: FC = () => {
  return (
    <nav className='tablet:order-2'>
      <button aria-label='menu' className='tablet:hidden translate-y-1'>
        <img src={menuBar} alt='menu' className='w-5' />
      </button>
      {/* desktop links */}
      <ul className='hidden tablet:flex gap-4 font-bold text-darkGrayBlue'>
        {links.map((link) => {
          return (
            <li key={link}>
              <a href='#'>{link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
