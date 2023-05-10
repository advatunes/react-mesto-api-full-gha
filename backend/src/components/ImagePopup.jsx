import React from 'react';


function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup-image ${card ? 'popup_opened' : ''}`}>
      <div className='popup-image__container'>
        <img className='popup-image__pic' src={card ? card.link : ''} alt={card ? card.name : ''} />
        <h2 className='popup-image__title'>{card ? card.name : ''}</h2>
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

export default ImagePopup;
