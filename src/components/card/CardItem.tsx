import React, { useState, useEffect } from 'react';
import './card.scss';
import { Link } from 'react-router-dom';

const CardItem = (props:any) => {
 
    return (
        <>
      <li className='cards__item'>
        <Link className='cards__item__link' to='#'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
    );
}

export default CardItem;