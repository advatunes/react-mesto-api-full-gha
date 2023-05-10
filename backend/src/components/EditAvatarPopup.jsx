import React, { useEffect } from 'react';

import PopupWithForm from './PopupWithForm';
import useValidation from '../utils/useValidation';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const { values, setValues, error, onChange, resetValidation, formValid } = useValidation();

  useEffect(() => {
    if (isOpen) {
      setValues({});
      resetValidation();
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: values.avatar,
    });
  }

  return (
    <PopupWithForm
      name={'avatar'}
      title={'Обновить аватар'}
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle={isLoading ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}
      formValid={formValid}
    >
      <input
        className='popup__input popup-avatar__input-link'
        name='avatar'
        placeholder='Ссылка на аватар'
        type='url'
        onChange={onChange}
        value={values.avatar || ''}
        required
      />
      <span className='popup__error  popup__error_visible' id='avatar-error'>
        {error.avatar || ''}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
