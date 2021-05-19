import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';


function Gallery() {
    return (
        <div className='gallery'>
        <h1>check out cake</h1> 
        <div className='gallery__container'>
        <div className='gallery__wrapper'>
        <ul className='gallery__item'>
            <GalleryItem />
        </ul>  
        </div>
        </div>
        </div>
    )
}

export default Gallery
