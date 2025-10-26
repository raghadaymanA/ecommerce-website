import React from 'react';
import { Truck, ShieldCheck, Headset  } from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.serviceItem}>
        <div className={styles.serviceIcon}>
          <div className={styles.iconCircleOuter}>
            <div className={styles.iconCircleInner}>
              <Truck size={40} strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className={styles.serviceItem}>
        <div className={styles.serviceIcon}>
          <div className={styles.iconCircleOuter}>
            <div className={styles.iconCircleInner}>
              <Headset size={40} strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className={styles.serviceItem}>
        <div className={styles.serviceIcon}>
          <div className={styles.iconCircleOuter}>
            <div className={styles.iconCircleInner}>
              <ShieldCheck size={40} strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </div>
    </section>
  );
};

export default Services;