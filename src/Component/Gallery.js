import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';


function Gallery() {
    return (
      <div className="gallery">
        <h1>CAKES GALLERY</h1>
        <div className="gallery__container">
          <div className="gallery__wrapper">
            <ul className="gallery__items">
              <GalleryItem
                src="images/1.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label="Wedding Cake"
                path="/Order-Online"
              />

              <GalleryItem
                src="images/1-1.jpg"
                text="Ingredients: Walnuts, Berries, Milk, Flour, Eggs, oil, vanilla "
                label=" Barbie Cake"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/2.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label=" White Cake"
                path="/Order-Online"
              />
            </ul>
            <ul className="gallery__items">
              <GalleryItem
                src="images/3.jpg"
                text="Ingredients: Chocolate, Milk, Flour, Eggs, butter, vanilla "
                label="Unicorn Cake"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/4.jpg"
                text="Ingredients: Walnuts, Milk, Flour, Eggs, butter, vanilla "
                label=" Vanilla Cake"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/5.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, vanilla "
                label="Fairy Cake"
                path="/Order-Online"
              />
            </ul>

            <ul className="gallery__items">
              <GalleryItem
                src="images/7.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, vanilla "
                label="Birthday Cake"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/8.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, vanilla "
                label=" Birthday Cake"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/6.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, vanilla "
                label=" Birthday Cake"
                path="/Order-Online"
              />
            </ul>
            <ul className="gallery__items">
              <GalleryItem
                src="images/9.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, vanilla "
                label="Purple Cake"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/10.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label=" Birthday Cake"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/11.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label="Bithday Cake"
                path="/Order-Online"
              />
            </ul>

            <ul className="gallery__items">
              <GalleryItem
                src="images/13.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label="Crispy Sweetery"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/14.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label=" Creemy Sweetery"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/12.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label=" Evening Snack"
                path="/Order-Online"
              />
            </ul>
            <ul className="gallery__items">
              <GalleryItem
                src="images/15.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label="Mocha Cake"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/16.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label=" Vanilla Cake"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/17.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label=" Classic Cake"
                path="/Order-Online"
              />
            </ul>
            <ul className="gallery__items">
              <GalleryItem
                src="images/18.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label="Anniversary Cake"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/19.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label=" Sweet 16 Cake"
                path="/Order-Online"
              />
              <GalleryItem
                src="images/20.jpg"
                text="Ingredients: Walnuts, Bananas, Milk, Flour, Eggs, butter, vanilla "
                label=" Low suger Cake"
                path="/Order-Online"
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Gallery
