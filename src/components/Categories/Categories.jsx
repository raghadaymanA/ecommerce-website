import React, { useState, useRef } from 'react';
import { Smartphone, Monitor, Watch, Camera, Headphones, ArrowLeft, ArrowRight, Gamepad2 } from 'lucide-react';
import styles from './Categories.module.css';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(3);
  const scrollRef = useRef(null);
  
  const categories = [
    { icon: <Smartphone size={56} strokeWidth={1.5} />, name: 'Phones' },
    { icon: <Monitor size={56} strokeWidth={1.5} />, name: 'Computers' },
    { icon: <Watch size={56} strokeWidth={1.5} />, name: 'SmartWatch' },
    { icon: <Camera size={56} strokeWidth={1.5} />, name: 'Camera' },
    { icon: <Headphones size={56} strokeWidth={1.5} />, name: 'HeadPhones' },
    { icon: <Gamepad2 size={56} strokeWidth={1.5} />, name: 'Gaming' },
    { icon: <Gamepad2 size={56} strokeWidth={1.5} />, name: 'Gaming' },
    { icon: <Gamepad2 size={56} strokeWidth={1.5} />, name: 'Gaming' }
 
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
    <section className={styles.categoriesSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <span className={styles.tag}>Categories</span>
          <h2>Browse By Category</h2>
        </div>
        <div className={styles.navArrows}>
          <button onClick={() => scroll('left')}><ArrowLeft size={20} /></button>
          <button onClick={() => scroll('right')}><ArrowRight size={20} /></button>
        </div>
      </div>
      <div className={styles.categoriesGrid} ref={scrollRef}>
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className={`${styles.categoryCard} ${selectedCategory === idx ? styles.active : ''}`}
            onClick={() => setSelectedCategory(idx)}
          >
            {cat.icon}
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
      <hr className={styles.sectionDivider} />
    </section>
  );
};

export default Categories;