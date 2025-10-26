import React, { useState, useEffect } from 'react';
import styles from './MusicBanner.module.css';

import BOOMBOX from '../../assets/images/BOOMBOX.png';

const MusicBanner = () => {
  const [time, setTime] = useState({ hours: 23, days: 5, minutes: 59, seconds: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { hours, days, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        return { hours, days, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.musicBanner}>
      <div className={styles.musicContent}>
        <span className={styles.musicTag}>Categories</span>
        <h2>Enhance Your<br/> Music Experience</h2>
        <div className={styles.countdownCircles}>
          <div className={styles.circleItem}>
            <span className={styles.circleNumber}>{String(time.hours).padStart(2, '0')}</span>
            <span className={styles.circleLabel}>Hours</span>
          </div>
          <div className={styles.circleItem}>
            <span className={styles.circleNumber}>{String(time.days).padStart(2, '0')}</span>
            <span className={styles.circleLabel}>Days</span>
          </div>
          <div className={styles.circleItem}>
            <span className={styles.circleNumber}>{String(time.minutes).padStart(2, '0')}</span>
            <span className={styles.circleLabel}>Minutes</span>
          </div>
          <div className={styles.circleItem}>
            <span className={styles.circleNumber}>{String(time.seconds).padStart(2, '0')}</span>
            <span className={styles.circleLabel}>Seconds</span>
          </div>
        </div>
        <button className={styles.buyNowBtn}>Buy Now!</button>
      </div>
      <div className={styles.musicImage}>
        <img src={BOOMBOX} alt="JBL BOOMBOX" />
      </div>
    </section>
  );
};

export default MusicBanner;