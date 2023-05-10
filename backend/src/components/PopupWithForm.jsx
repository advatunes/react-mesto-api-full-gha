import React from 'react';

function PopupWithForm({
  isOpen,
  onClose,
  name,
  title,
  buttonTitle,
  children,
  onSubmit,
  formValid,
}) {
  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''} `}>
      <div className='popup__container'>
        <form className='popup__form ' name={`popup-${name}`} onSubmit={onSubmit} noValidate>
          <h2 className='popup__title'>{title}</h2>
          {children}
          <button
            className={` popup__submit ${!formValid ? ' popup__submit_disabled' : ''} `}
            type='submit'
            aria-label='Сохранить'
            disabled={!formValid}
          >
            {buttonTitle}
          </button>
          <button
            className='popup__close-icon'
            type='button'
            aria-label='закрыть'
            onClick={onClose}
          ></button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
