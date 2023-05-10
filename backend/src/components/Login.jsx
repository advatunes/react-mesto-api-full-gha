import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Auth from '../utils/Auth';
import '../blocks/Login/Login.css';
import Preloader from '../utils/Preloader';

function Login({ handleLogin, formValue, onChange, setFormValue, setEmail }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return <Preloader />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { email, password } = formValue;
    Auth.login(email, password)
      .then((data) => {
        if (data.token) {
          setEmail(email);
          localStorage.setItem('jwt', data.token);
          setFormValue({ username: '', password: '' });
          handleLogin();
          navigate('/', { replace: true });
        } else {
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='login'>
      <h2 className='login__title'>Вход</h2>
      <div className='login__container'>
        <form className='login__form ' name='login' onSubmit={handleSubmit} noValidate>
          <input
            className='login__input'
            name='email'
            placeholder='Email'
            type='email'
            value={formValue.email}
            onChange={onChange}
            required
          />
          <input
            className='login__input'
            name='password'
            placeholder='Пароль'
            type='password'
            value={formValue.password}
            onChange={onChange}
            required
          />
          <button className='login__button' type='submit' aria-label='Сохранить'>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
