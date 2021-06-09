import React from 'react'
import "./Product.css"
function Product() {
    return (
        <div className="product">
            <div class="product__info">
                <p> Atomic Habits</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div class="product__rating">
                    <p>*</p>
                </div>
            </div>
            <img className='product__image'
            src="https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SX329_BO1,204,203,200_.jpg"
          alt=""/>
          <button>Add to Basket</button>
        </div>
    )
}

export default Product
