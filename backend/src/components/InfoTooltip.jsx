import React, { useState } from 'react';
import registerSucces from '../images/register_succes.png';
import registerFail from '../images/register_fail.png';

function InfoTooltip({ isOpen, onClose, status }) {

  if (isOpen)
    return (
      <div className={`popup  popup_opened infoTooltip`}>
        <div className='popup__container   infoTooltip__container'>
          <img
            className='infoTooltip__img'
            src={status ? registerSucces : registerFail}
            alt='Успешная регистрация'
          />
          <h2 className='popup__title infoTooltip__title'>
            {status ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
          </h2>

          <button
            className='popup__close-icon'
            type='button'
            aria-label='закрыть'
            onClick={onClose}
          ></button>
        </div>
      </div>
    );
}

export default InfoTooltip;
