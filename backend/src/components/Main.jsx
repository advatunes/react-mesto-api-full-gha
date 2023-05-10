import React, { useState, useEffect } from 'react';
import Card from './Card';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditAvatar,
  onAddPlace,
  onEditProfile,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile content__profile'>
        <div className='profile__avatar-wrap'>
          <img
            className='profile__avatar'
            alt='аватар'
            onClick={onEditAvatar}
            src={`${currentUser.avatar}`}
          />
          <div className='profile__avatar-hover'></div>
        </div>

        <div className='profile__info'>
          <div className='profile__name-wrap'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <button
              className='profile__edit-button'
              type='button'
              aria-label='Редактировать профиль'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__job'>{currentUser.about}</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          aria-label='Добавить карточку'
          onClick={onAddPlace}
        ></button>
      </section>

      <section className='elements'>
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            name={card.name}
            link={card.link}
            likes={card.likes.length}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
