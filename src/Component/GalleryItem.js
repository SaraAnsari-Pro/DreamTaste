import React from 'react';
// import "./Button.css"
import './GalleryItem.css'
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import StripeContainer from './pages/StripeContainer';


function GalleryItem(props) {

const [cart, setCart]=useState([]);



const addToCart = () => {
    console.log("add to cart is working")
  setCart([...cart]);
}

    return (
      <>
        <li className="gallery__item">
          <Link className="gallery__item__link" to={props.path}>
            <figure
              className="gallery__item__picWrap"
              data-category={props.label}
            >
              <img
                className="gallery__item__img"
                src={props.src}
                alt="wedding cake"
              />
            </figure>
            <div className="gallery__item__info">
              <h5 className="gallery__item__text">{props.text}</h5>
                            
              <div className="add-button">
                <button onClick = {() => addToCart()}>Add to Cart</button>
              </div>
            </div>
          </Link>
        </li>
      </>
    )
}

export default GalleryItem;
