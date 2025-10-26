import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ExploreProducts.module.css';
import DogFood from '../../assets/images/DogFood.png';
import CANON from '../../assets/images/CANON.png';
import ASUS from '../../assets/images/ASUS.png';
import curology from '../../assets/images/curology.png';
import car from '../../assets/images/car.png';
import Cleats from '../../assets/images/Cleats.png';
import Gamepad from '../../assets/images/Gamepad.png';
import satinjacket from '../../assets/images/quilted-satin-jacket.png';

const ExploreProducts = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const [canScrollLeft1, setCanScrollLeft1] = useState(false);
  const [canScrollRight1, setCanScrollRight1] = useState(true);
  const [canScrollLeft2, setCanScrollLeft2] = useState(false);
  const [canScrollRight2, setCanScrollRight2] = useState(true);

  const [selectedColors, setSelectedColors] = useState({
    5: 0,
    6: 0,
    7: 0,
    8: 0
  });

  const products = [
    { id: 1, image: DogFood, name: 'Breed Dry Dog Food', price: 100, rating: 3, reviews: 35 },
    { id: 2, image: CANON, name: 'CANON EOS DSLR Camera', price: 360, rating: 4, reviews: 95 },
    { id: 3, image: ASUS, name: 'ASUS FHD Gaming Laptop', price: 700, rating: 5, reviews: 325 },
    { id: 4, image: curology, name: 'Curology Product Set', price: 500, rating: 4, reviews: 145 },
    { id: 5, image: car, name: 'Kids Electric Car', price: 960, rating: 5, reviews: 65, isNew: true, colors: ['red', '#DB4444'] },
    { id: 6, image: Cleats, name: 'Jr. Zoom Soccer Cleats', price: 1160, rating: 5, reviews: 35, colors: ['#EEFF61', '#DB4444'] },
    { id: 7, image: Gamepad, name: 'GP11 Shooter USB Gamepad', price: 660, rating: 4.5, reviews: 55, isNew: true, colors: ['#000', '#DB4444'] },
    { id: 8, image: satinjacket, name: 'Quilted Satin Jacket', price: 660, rating: 4.5, reviews: 55, colors: ['#184A48', '#DB4444'] }
  ];

  const checkScroll = (ref, setLeft, setRight) => {
    const container = ref.current;
    if (container) {
      setLeft(container.scrollLeft > 0);
      setRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container1 = scrollRef1.current;
    const container2 = scrollRef2.current;
    
    const handleScroll1 = () => checkScroll(scrollRef1, setCanScrollLeft1, setCanScrollRight1);
    const handleScroll2 = () => checkScroll(scrollRef2, setCanScrollLeft2, setCanScrollRight2);
    
    if (container1) {
      container1.addEventListener('scroll', handleScroll1);
      checkScroll(scrollRef1, setCanScrollLeft1, setCanScrollRight1);
    }
    
    if (container2) {
      container2.addEventListener('scroll', handleScroll2);
      checkScroll(scrollRef2, setCanScrollLeft2, setCanScrollRight2);
    }
    
    return () => {
      if (container1) container1.removeEventListener('scroll', handleScroll1);
      if (container2) container2.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  const scroll = (ref, direction) => {
    const container = ref.current;
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handleColorSelect = (productId, colorIndex) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: colorIndex
    }));
  };

  return (
    <section className={styles.exploreProducts}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <span className={styles.tag}>Our Products</span>
          <h2>Explore Our Products</h2>
        </div>
        <div className={styles.navArrows}>
          <button><ChevronLeft size={20} /></button>
          <button><ChevronRight size={20} /></button>
        </div>
      </div>
      
      <div className={styles.scrollContainer}>
        {canScrollLeft1 && (
          <button
            className={`${styles.scrollArrow} ${styles.scrollArrowLeft}`}
            onClick={() => scroll(scrollRef1, 'left')}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <div className={styles.productsWrapper} ref={scrollRef1}>
          <div className={styles.productsGrid4}>
            {products.slice(0, 4).map(product => (
              <ProductCard 
                key={product.id} 
                {...product} 
              />
            ))}
          </div>
        </div>
        {canScrollRight1 && (
          <button
            className={`${styles.scrollArrow} ${styles.scrollArrowRight}`}
            onClick={() => scroll(scrollRef1, 'right')}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
      
      <div className={styles.scrollContainer}>
        {canScrollLeft2 && (
          <button
            className={`${styles.scrollArrow} ${styles.scrollArrowLeft}`}
            onClick={() => scroll(scrollRef2, 'left')}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <div className={styles.productsWrapper} ref={scrollRef2}>
          <div className={styles.productsGrid4}>
            {products.slice(4).map(product => (
              <ProductCard 
                key={product.id} 
                {...product}
                selectedColorIndex={selectedColors[product.id] || 0}
                onColorSelect={(colorIndex) => handleColorSelect(product.id, colorIndex)}
              />
            ))}
          </div>
        </div>
        {canScrollRight2 && (
          <button
            className={`${styles.scrollArrow} ${styles.scrollArrowRight}`}
            onClick={() => scroll(scrollRef2, 'right')}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
      
      <div className={styles.viewAllContainer}>
        <button className={styles.viewAllBtn}>View All Products</button>
      </div>
    </section>
  );
};

export default ExploreProducts;