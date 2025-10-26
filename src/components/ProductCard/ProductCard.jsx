import React, { useState } from 'react';
import { Heart, Eye, Star } from 'lucide-react';
import styles from './ProductCard.module.css';

const ProductCard = ({ 
  image, 
  name, 
  price, 
  oldPrice, 
  discount, 
  rating, 
  reviews, 
  isNew, 
  colors,
  selectedColorIndex = 0,
  onColorSelect 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.productCard} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.productImageContainer}>
        {discount && <span className={styles.discountBadge}>-{discount}%</span>}
        {isNew && <span className={styles.newBadge}>NEW</span>}
        <div className={styles.productImage}>
          <img src={image} alt={name} />
        </div>
        
        <div className={styles.productActions}>
          <button className={styles.actionBtn}><Heart size={20} /></button>
          <button className={styles.actionBtn}><Eye size={20} /></button>
        </div>
        {isHovered && (
          <button className={styles.addToCartBtn}>Add To Cart</button>
        )}
      </div>
      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <div className={styles.price}>
          <span className={styles.currentPrice}>${price}</span>
          {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
        </div>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => {
            const isFull = i < Math.floor(rating);
            const isHalf = i === Math.floor(rating) && rating % 1 !== 0;
            
            return (
              <Star 
                key={i} 
                size={16} 
                fill={isFull ? "#FFAD33" : isHalf ? "url(#halfGrad)" : "none"} 
                stroke="#FFAD33"
              />
            );
          })}
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <linearGradient id="halfGrad">
                <stop offset="50%" stopColor="#FFAD33" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
          <span>({reviews})</span>
        </div>
        {colors && colors.length > 0 && (
          <div className={styles.colorOptions}>
            {colors.map((color, i) => (
              <span 
                key={i} 
                className={`${styles.colorDot} ${selectedColorIndex === i ? styles.colorSelected : ''}`}
                style={{ background: color }}
                onClick={() => onColorSelect && onColorSelect(i)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;