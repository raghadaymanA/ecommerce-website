import React from 'react';
import styles from './NewArrival.module.css';
import playstation from '../../assets/images/ps5-playstation.png'
import woman from '../../assets/images/woman.png';
import Speakers from '../../assets/images/Speakers.png';
import Perfume from '../../assets/images/Perfume.png';

const NewArrival = () => {
  return (
    <section className={styles.newArrival}>
      <div className={styles.sectionTitle}>
        <span className={styles.tag}>Featured</span>
        <h2>New Arrival</h2>
      </div>
      <div className={styles.arrivalGrid}>
        <div className={`${styles.arrivalCard} ${styles.arrivalLarge}`}>
          <img src={playstation} alt="PlayStation 5" />
          <div className={styles.arrivalContent}>
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5 <br />coming out on sale.</p>
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div className={styles.arrivalRight}>
          <div className={`${styles.arrivalCard} ${styles.arrivalMedium}`}>
            <img src={woman} alt="Women's Collections" />
            <div className={styles.arrivalContent}>
              <h3>Women's Collections</h3>
              <p>Featured woman collections that<br /> give you another vibe.</p>
              <a href="#">Shop Now</a>
            </div>
          </div>
          <div className={styles.arrivalSmallRow}>
            <div className={`${styles.arrivalCard} ${styles.arrivalSmall}`}>
              <img src={Speakers} alt="Speakers" />
              <div className={styles.arrivalContent}>
                <h3>Speakers</h3>
                <p>Amazon wireless speakers</p>
                <a href="#">Shop Now</a>
              </div>
            </div>
            <div className={`${styles.arrivalCard} ${styles.arrivalSmall}`}>
              <img src={Perfume} alt="Perfume" />
              <div className={styles.arrivalContent}>
                <h3>Perfume</h3>
                <p>GUCCI INTENSE OUD EDP</p>
                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;