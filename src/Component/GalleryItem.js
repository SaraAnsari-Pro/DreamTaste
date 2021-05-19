import React from 'react';
import './Gallery.css'
import { Link } from 'react-router-dom';


function GalleryItem() {
    return (
        <>
            <li className='gallery__item'></li>
            <Link className='gallery__item__link'>
                <figure className='gallery__item__picWrap'>
                    <img src='/' alt='Cake Image' className='gallery__item__img' />
                </figure>
                <div className="gallery__item__info">
                    <h5 className='gallery__item__text' />
                </div>
            </Link>
        </>
    )
}

export default GalleryItem;
