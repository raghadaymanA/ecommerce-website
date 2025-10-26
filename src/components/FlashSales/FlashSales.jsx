import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './FlashSales.module.css';
import playstation from '../../assets/images/playstation.png';
import keyboard from '../../assets/images/keyboard.png';
import LCD from '../../assets/images/LCD.png';
import chair from '../../assets/images/chair.png';

const FlashSales = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [time, setTime] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) days = 0;
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const checkScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const products = [
    { id: 1, image: playstation, name: 'HAVIT HV-G92 Gamepad', price: 120, oldPrice: 160, discount: 40, rating: 5, reviews: 88 },
    { id: 2, image: keyboard, name: 'AK-900 Wired Keyboard', price: 960, oldPrice: 1160, discount: 35, rating: 4, reviews: 75 },
    { id: 3, image: LCD, name: 'IPS LCD Gaming Monitor', price: 370, oldPrice: 400, discount: 30, rating: 5, reviews: 99 },
    { id: 4, image: chair, name: 'S-Series Comfort Chair', price: 375, oldPrice: 400, discount: 25, rating: 4.5, reviews: 99 },
    { id: 5, image: chair, name: 'S-Series Comfort Chair', price: 375, oldPrice: 400, discount: 25, rating: 4.5, reviews: 99 },
    { id: 6, image: chair, name: 'S-Series Comfort Chair', price: 375, oldPrice: 400, discount: 25, rating: 4.5, reviews: 99 }
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className={styles.flashSales}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleGroup}>
          <div className={styles.sectionTitle}>
            <span className={styles.tag}>Today's</span>
            <h2>Flash Sales</h2>
          </div>
          <div className={styles.timer}>
            <div className={styles.timeUnit}>
              <span className={styles.label}>Days</span>
              <span className={styles.value}>{String(time.days).padStart(2, '0')}</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeUnit}>
              <span className={styles.label}>Hours</span>
              <span className={styles.value}>{String(time.hours).padStart(2, '0')}</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeUnit}>
              <span className={styles.label}>Minutes</span>
              <span className={styles.value}>{String(time.minutes).padStart(2, '0')}</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeUnit}>
              <span className={styles.label}>Seconds</span>
              <span className={styles.value}>{String(time.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
        <div className={styles.navArrows}>
          <button onClick={() => scroll('left')}><ChevronLeft  size={20} /></button>
          <button onClick={() => scroll('right')}><ChevronRight size={20} /></button>
        </div>
      </div>
      
      <div className={styles.scrollContainer}>
        {canScrollLeft && (
          <button
            className={`${styles.scrollArrow} ${styles.scrollArrowLeft}`}
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <div className={styles.productsScroll} ref={scrollRef}>
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        {canScrollRight && (
          <button
            className={`${styles.scrollArrow} ${styles.scrollArrowRight}`}
            onClick={() => scroll('right')}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
      
      <div className={styles.viewAllContainer}>
        <button className={`${styles.viewAllBtn} ${showMore ? styles.active : ''}`} onClick={() => setShowMore(!showMore)}>
          View All Products
        </button>
      </div>
      <hr className={styles.sectionDivider} />
    </section>
  );
};

export default FlashSales;