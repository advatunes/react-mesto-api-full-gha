import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__like-btn ${isLiked && 'element__like-btn_active'}`;

  function handleLikeClick() {
    return props.onCardLike(props.card);
  }

  function handleClick() {
    return props.onCardClick(props.card);
  }

  function handleDeleteClick() {
    return props.onCardDelete(props.card);
  }

  return (
    <article className='element'>
      <img className='element__image' src={props.link} alt={props.name} onClick={handleClick} />
      {isOwn && (
        <button
          className='element__trash-icon'
          type='button'
          aria-label='удалить'
          onClick={handleDeleteClick}
        ></button>
      )}
      <div className='element__info'>
        <h2 className='element__name'>{props.name}</h2>
        <div className='element__like'>
          <button
            className={cardLikeButtonClassName}
            type='button'
            aria-label='лайк'
            onClick={handleLikeClick}
          ></button>
          <p className='element__like-counter'>{props.likes}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
