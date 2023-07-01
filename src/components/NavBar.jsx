import React, { useState } from 'react';
import { useHref } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavTabs from './NavTabs';
import codeIcon from '../assets/icons/coder_icn.png';
import styles from './styles/NavBar.module.css';
import '../App.css';
import myCV from '../assets/pdf/Matt_Jones_CV_2023.pdf';

const NavBar = () => {
  // set toggle init state
  const [toggle, setToggle] = useState(false);
  // handle toggles function
  const handleToggle = () => setToggle(!toggle);

  // init useHistory
  const href = useHref();

  // handle side toggle navs onClick
  const handleLinkClick = () => {
    setToggle(false);
  };

  // handle external CV link
  function handleCVClick() {
    window.open(`${myCV}`, '_blank');
    window.location.reload();
  }

  return (
    <>
      {/* build the NavBar */}
      <nav className='flex bg-primary items-center py-6 md:p-3 mt-0 fixed top-0 w-full z-50 mx-auto'>
        <div className='flex lg:flex-1 items-center'>
          {/* Nav Icon btn and name link */}
          <Link to={href} className='flex items-center -m-2.5 p-2.5'>
            <img
              className='h-10 md:h-12 pl-4 pr-6 animate-pulse'
              src={`${codeIcon}`}
              alt='coder icon'
              // force refresh
              onClick={() => {
                window.location.reload();
                // fix the 404 useHref
                window.location.href = href;
              }}
              title='keep tapping me to reset the coloured squares!'
            />
          </Link>
          <span className='text-2xl font-bold text-accent'>
            <a
              className='nameTag text-sm sm:text-lg md:text-2xl'
              href='https://github.com/Matt-Jones-Developer'
            >
              i am glitchyGhost
            </a>
          </span>
        </div>
        {/* mobile nav toggle nav */}
        <div className='flex ml-auto pr-4 lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center rounded-md p-2.5 text-white'
            onClick={handleToggle}
          >
            {/* hamburger divs */}
            <div className='space-y-2'>
              <div className='w-10 h-1 sm:h-1.5 bg-white'></div>
              <div className='w-10 h-1 sm:h-1.5 bg-white'></div>
              <div className='w-10 h-1 sm:h-1.5 bg-white'></div>
            </div>
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12 nav-items'>
          <NavTabs />
        </div>
      </nav>

      {/* mobile toggle nav links */}
      <nav
        className={
          !toggle ? 'mobile-nav left-[-100%]' : 'mobile-nav left-0 z-40'
        }
      >
        <div
          className={
            !toggle
              ? `{styles.backgroundOff}`
              : `{styles.backgroundOn} mobile-overlay`
          }
          onClick={handleToggle}
        ></div>
        <ul
          className={`${styles.toggleNavList} toggleNavList flex flex-col p-5 pl-2 pt-3 mt-8 z-40`}
        >
          <li>
            <Link to='/' onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to='/skills' onClick={handleLinkClick}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='/projects' onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <li>
            <a
              href={`${myCV}`}
              onClick={handleCVClick}
              target='_blank'
              rel='noreferrer'
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
