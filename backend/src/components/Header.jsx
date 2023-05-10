import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import logo from '../images/header__logo.svg';

function Header({ email, loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  function handleBurgerToggle() {
    setBurgerIsOpen(!burgerIsOpen);
  }

  function signOut() {
    localStorage.removeItem('jwt');
    navigate('/login');
    setLoggedIn(false);
  }

  return (
    <header className={` header ${loggedIn && burgerIsOpen ? ' header_open' : ''}`}>
      <div
        className={` header__container-burger ${
          loggedIn && burgerIsOpen ? ' header__container-burger_open' : ''
        } `}
      >
        <a className='header__logo' href='#'>
          <img className='header__logo-img' src={logo} alt='логотип' />
        </a>

        {loggedIn && (
          <button
            className={` header__button-burger ${
              loggedIn && burgerIsOpen ? ' header__button-burger_open' : ''
            } `}
            onClick={handleBurgerToggle}
          ></button>
        )}
      </div>

      <Routes>
        <Route
          path='/signin'
          element={
            <Link to='/signup' className='header__button'>
              Регистрация
            </Link>
          }
        ></Route>
        <Route
          path='/signup'
          element={
            <Link to='/signin' className='header__button'>
              Войти
            </Link>
          }
        ></Route>

        <Route
          path='/'
          element={
            <>
              <div
                className={` header__container-link ${
                  loggedIn && burgerIsOpen ? ' header__container-link_open' : ''
                }`}
              >
                <p className='header__email'>{email}</p>
                <Link
                  to='/signin'
                  className='header__button header__button_logout'
                  onClick={signOut}
                >
                  Выйти
                </Link>
              </div>
            </>
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
