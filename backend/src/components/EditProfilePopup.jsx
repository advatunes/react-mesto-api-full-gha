import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
import useValidation from '../utils/useValidation';

function EditProfileComponent({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, setValues, error, onChange, resetValidation, formValid } = useValidation();

  React.useEffect(() => {
    setValues(currentUser);
    resetValidation();
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      about: values.about,
    });
  }

  return (
    <PopupWithForm
      name={'name'}
      title={'Редактировать профиль'}
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle={isLoading ? 'Сохранение...' : 'Сохранить'}
      formValid={formValid}
      onSubmit={handleSubmit}
    >
      <input
        className='popup__input popup-name__input-name'
        name='name'
        value={values.name || ''}
        onChange={onChange}
        type='text'
        minLength='2'
        maxLength='40'
        required
      />
      <span className='popup__error  popup__error_visible' id='name-error'>
        {error.name || ''}
      </span>
      <input
        className='popup__input popup-name__input-job'
        name='about'
        value={values.about || ''}
        onChange={onChange}
        type='text'
        minLength='2'
        maxLength='200'
        required
      />

      <span className='popup__error  popup__error_visible' id='job-error'>
        {error.about || ''}
      </span>
    </PopupWithForm>
  );
}

export default EditProfileComponent;
