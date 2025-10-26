import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import styles from "./HeroBanner.module.css";
import mobile from "../../assets/images/mobile.png";
import macBook from "../../assets/images/MacBook Pro.jfif";
import apple from "../../assets/icons/apple.png";
import watch from "../../assets/images/apple watch.jfif";
import airpods from "../../assets/images/airpods max.webp";
import ipad from "../../assets/images/ipad pro.jfif";

const HeroBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [womanExpanded, setWomanExpanded] = useState(false);
  const [menExpanded, setMenExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "iPhone 14 Series",
      subtitle: (
        <>
          Up to 10%
          <br /> off Voucher
        </>
      ),
      image: mobile,
      className: "mobile",
    },
    {
      title: "MacBook Pro",
      subtitle: (
        <>
          Up to 15% <br />
          off Voucher
        </>
      ),
      image: macBook,
      className: "macbook",
    },
    {
      title: "AirPods Max",
      subtitle: (
        <>
          Up to 20% <br />
          off Voucher
        </>
      ),
      image: airpods,
      className: "airpods",
    },
    {
      title: "iPad Pro",
      subtitle: (
        <>
          Up to 12% <br />
          off Voucher
        </>
      ),
      image: ipad,
      className: "ipad",
    },
    {
      title: "Apple Watch",
      subtitle: (
        <>
          Up to 18%
          <br /> off Voucher
        </>
      ),
      image: watch,
      className: "watch",
    },
  ];

  return (
    <section className={styles.heroSection}>
      <aside className={styles.sidebar}>
        <ul>
          <li
            onClick={() => setWomanExpanded(!womanExpanded)}
            className={styles.expandable}
          >
            <span>Woman's Fashion</span>
            <ChevronRight
              size={16}
              className={womanExpanded ? styles.rotated : ""}
            />
          </li>
          {womanExpanded && (
            <ul className={styles.submenu}>
              <li>Dresses</li>
              <li>Tops</li>
              <li>Shoes</li>
            </ul>
          )}
          <li
            onClick={() => setMenExpanded(!menExpanded)}
            className={styles.expandable}
          >
            <span>Men's Fashion</span>
            <ChevronRight
              size={16}
              className={menExpanded ? styles.rotated : ""}
            />
          </li>
          {menExpanded && (
            <ul className={styles.submenu}>
              <li>Shirts</li>
              <li>Pants</li>
              <li>Shoes</li>
            </ul>
          )}
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </aside>
      <div className={styles.heroBanner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerText}>
            <div className={styles.brandLogo}>
              <img src={apple} width="40" height="49" alt="Apple" />
              <p className={styles.subtitle}>{slides[activeSlide].title}</p>
            </div>
            <h2>{slides[activeSlide].subtitle}</h2>
            <a href="#" className={styles.shopNowLink}>
              Shop Now <ArrowRight size={20} />
            </a>{" "}
          </div>
          <div className={styles.bannerImage}>
            <img
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              className={styles[slides[activeSlide].className]}
            />
          </div>
        </div>
        <div className={styles.bannerDots}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                activeSlide === i ? styles.active : ""
              }`}
              onClick={() => setActiveSlide(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
