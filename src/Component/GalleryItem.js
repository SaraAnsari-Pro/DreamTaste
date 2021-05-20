import React from 'react';
// import './Gallery.css'
import { Link } from 'react-router-dom';


function GalleryItem(props) {
    return (
        <>
            <li className='gallery__item'>
                <Link className='gallery__item__link' to={props.path} >
                    <figure className='gallery__item__picWrap' data-category={props.label}>
                        <img
                            className='gallery__item__img'
                            src={props.src}
                            alt='wedding cake' 
                        />
                    </figure>
                    <div className='gallery__item__info'>
                        <h5 className='gallery__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default GalleryItem;
