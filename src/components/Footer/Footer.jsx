import React, { useState, useEffect } from 'react';
import { SendHorizontal, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';
import AppStore from '../../assets/images/AppStore.png';
import QrCode from '../../assets/images/QrCode.png';
import googlePlay from '../../assets/images/googlePlay.png';

const Footer = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      {scrollToTop && (
        <button className={styles.scrollToTop} onClick={scrollTop}>
          <ArrowUp size={24} />
        </button>
      )}
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your email" />
            <button><SendHorizontal size={20} /></button>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className={styles.footerColumn}>
          <h4>Account</h4>
          <ul>
            <li><a href="#">My Account</a></li>
            <li>
              <a href="#">Login</a> / <a href="#">Register</a>
            </li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Quick Link</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Download App</h4>
          <p className={styles.appSave}>Save $3 with App New User Only</p>
          <div className={styles.appDownloads}>
            <img 
              src={QrCode} 
              alt="QR Code" 
              className={styles.qrCode} 
            />
            <div className={styles.storeButtons}>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img 
                  src={googlePlay}
                  alt="Get it on Google Play" 
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img 
                  src={AppStore} 
                  alt="Download on the App Store" 
                />
              </a>
            </div>
          </div>
          <div className={styles.socialIcons}>
            <Facebook size={20} />
            <Twitter size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;