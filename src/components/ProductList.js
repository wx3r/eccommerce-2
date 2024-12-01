import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../styles/ProductList.css';

const products = [
    { id: 1, name: 'Luxury Sneakers', price: '$499', images: ['img1.jpg', 'bert-ferranco-GR4EEDj6bAE-unsplash.jpg'] },
    { id: 2, name: 'Classic Leather Shoes', price: '$599', images: ['dakota-krupp-cbpVULt59IU-unsplash.jpg', 'dalton-touchberry-5qMvvX5fOG4-unsplash.jpg'] },
    { id: 3, name: 'Elegant Boots', price: '$799', images: ['imani-bahati-LxVxPA1LOVM-unsplash.jpg', 'jayson-hinrichsen-qLs4WYXqLNY-unsplash.jpg'] },
    { id: 4, name: 'Running Shoes', price: '$199', images: ['lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg', 'maksim-larin-NOpsC3nWTzY-unsplash.jpg'] },
    { id: 5, name: 'Formal Shoes', price: '$399', images: ['omar-prestwich-mBjrF0MK6mc-unsplash.jpg', 'tom-the-photographer-_mA3D1D6giE-unsplash.jpg'] },
    { id: 6, name: 'Luxury Sneakers', price: '$499', images: ['bert-ferranco-GR4EEDj6bAE-unsplash.jpg', 'img1.jpg'] },
    { id: 7, name: 'Classic Leather Shoes', price: '$599', images: ['dalton-touchberry-5qMvvX5fOG4-unsplash.jpg', 'dakota-krupp-cbpVULt59IU-unsplash.jpg'] },
    { id: 8, name: 'Elegant Boots', price: '$799', images: ['jayson-hinrichsen-qLs4WYXqLNY-unsplash.jpg', 'imani-bahati-LxVxPA1LOVM-unsplash.jpg'] },
    { id: 9, name: 'Running Shoes', price: '$199', images: ['maksim-larin-NOpsC3nWTzY-unsplash.jpg', 'lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg'] },
    { id: 10, name: 'Formal Shoes', price: '$399', images: ['tom-the-photographer-_mA3D1D6giE-unsplash.jpg', 'omar-prestwich-mBjrF0MK6mc-unsplash.jpg'] },
];

const ProductList = () => {
    const { addToCart, user } = useContext(UserContext);
  
    const handleAddToCart = (product) => {
      if (user) {
        addToCart(product);
      } else {
        alert('Please log in to add items to your cart.');
      }
    };
  
    return (
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-slider">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={`assets/images/${image}`}
                  alt={product.name}
                />
              ))}
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;
