import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./BestSelling.module.css";
import coat from "../../assets/images/The-North-Face-x-Gucci-coat.png";
import bag from "../../assets/images/Gucci-Savoy-medium-duffle-bag.png";
import Cooler from "../../assets/images/gammaxx.png";
import BookSelf from "../../assets/images/table.png";

const BestSelling = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const products = [
    {
      id: 1,
      image: coat,
      name: "The north coat",
      price: 260,
      oldPrice: 360,
      rating: 5,
      reviews: 65,
    },
    {
      id: 2,
      image: bag,
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      rating: 4.5,
      reviews: 65,
    },
    {
      id: 3,
      image: Cooler,
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 4.5,
      reviews: 65,
    },
    {
      id: 4,
      image: BookSelf,
      name: "Small BookSelf",
      price: 360,
      rating: 5,
      reviews: 65,
    },
    {
      id: 5,
      image: BookSelf,
      name: "Product 5",
      price: 360,
      rating: 4,
      reviews: 65,
    },
  ];

  const checkScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className={styles.bestSelling}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <span className={styles.tag}>This Month</span>
          <h2>Best Selling Products</h2>
        </div>
        <button className={styles.viewAllBtnHeader}>View All</button>
      </div>
      <div className={styles.bestSellingContainer}>
        {canScrollLeft && (
          <button
            className={`${styles.scrollArrow} ${styles.scrollArrowLeft}`}
            onClick={() => scroll("left")}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <div className={styles.productsScrollBest} ref={scrollRef}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        {canScrollRight && (
          <button
            className={`${styles.scrollArrow} ${styles.scrollArrowRight}`}
            onClick={() => scroll("right")}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </section>
  );
};

export default BestSelling;
