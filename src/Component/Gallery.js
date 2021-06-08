import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';


function Gallery() {
    return (
        <div className='gallery'>
            <h1>CAKES GALLERY</h1>
            <div className='gallery__container'>
                <div className='gallery__wrapper'>
                    <ul className='gallery__items'>
                        <GalleryItem 
                        src='images/1.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label='Wedding Cake'
                        path='/Gallery' 
                        />
                          <GalleryItem 
                        src='images/2.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label=' Wedding Cake'
                        path='/Contact' 
                        />
                    </ul>
                    <ul className='gallery__items'>
                        <GalleryItem 
                        src='images/3.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label='Chocolate Cake'
                        path='/Gallery' 
                        />
                          <GalleryItem 
                        src='images/4.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label=' Cheese Cake'
                        path='/Gallery' 
                        />
                    </ul>
                    <ul className='gallery__items'>
                        <GalleryItem 
                        src='images/1.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label='Wedding Cake'
                        path='/gallery' 
                        />
                          <GalleryItem 
                        src='images/2.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label=' Wedding Cake'
                        path='/gallery' 
                        />
                    </ul>
                    <ul className='gallery__items'>
                        <GalleryItem 
                        src='images/3.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label='Chocolate Cake'
                        path='/gallery' 
                        />
                          <GalleryItem 
                        src='images/4.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label=' Cheese Cake'
                        path='/gallery' 
                        />
                    </ul>
                    <ul className='gallery__items'>
                        <GalleryItem 
                        src='images/1.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label='Wedding Cake'
                        path='/gallery' 
                        />
                          <GalleryItem 
                        src='images/2.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label=' Wedding Cake'
                        path='/gallery' 
                        />
                    </ul>
                    <ul className='gallery__items'>
                        <GalleryItem 
                        src='images/3.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label='Chocolate Cake'
                        path='/gallery' 
                        />
                          <GalleryItem 
                        src='images/4.jpg'
                        text="this cake made by nuts and fruits this cake made by nuts and fruits
                        this cake made by nuts and fruits this cake made by nuts and fruits"
                        label=' Cheese Cake'
                        path='/gallery' 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Gallery
