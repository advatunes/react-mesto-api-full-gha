import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import useValidation from '../utils/useValidation';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const { values, setValues, error, onChange, resetValidation, formValid } = useValidation();

  useEffect(() => {
    if (isOpen) {
      setValues({});
      resetValidation();
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: values.name,
      link: values.link,
    });
    resetValidation();
  }

  return (
    <PopupWithForm
      name={'place'}
      title={'Новое место'}
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle={isLoading ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}
      formValid={formValid}
    >
      <label className='popup__form-field'>
        <input
          className='popup__input popup-place__input-place'
          name='name'
          placeholder='Название'
          type='text'
          minLength='2'
          maxLength='30'
          onChange={onChange}
          value={values.name || ''}
          required
        />
        <span className='popup__error  popup__error_visible' id='link-error'>
          {error.name || ''}
        </span>
      </label>
      <label className='popup__form-field'>
        <input
          className='popup__input popup-place__input-link'
          name='link'
          placeholder='Ссылка на картинку'
          type='url'
          onChange={onChange}
          value={values.link || ''}
          required
        />
        <span className='popup__error  popup__error_visible' id='link-error'>
          {error.link || ''}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
