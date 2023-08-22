import { FC } from 'react';
import close from '../images/icon-close.svg';
import { links } from '../data';
import { useCartContext } from '../hooks/useCartContext';

const SideBar: FC = () => {
  const {
    state: { isMenuOpen },
    closeMenu,
  } = useCartContext();
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/50 z-10 tablet:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-1 visible' : 'opacity-0 invisible 0'
        }`}
        onClick={closeMenu}
      ></div>

      <aside
        className={`fixed top-0 left-0 w-4/6 h-screen bg-white z-20 flex flex-col p-5 gap-10 tablet:hidden transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-1 visible translate-x-0'
            : 'opacity-0 invisible -translate-x-full'
        } `}
      >
        <button type='button' aria-label='close' onClick={closeMenu}>
          <img src={close} alt='close' />
        </button>
        <ul className='flex-1 flex flex-col gap-4 font-bold'>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href='#' onClick={closeMenu}>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
