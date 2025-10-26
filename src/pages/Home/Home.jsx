import React from 'react';
import Header from '../../components/Header/Header';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import FlashSales from '../../components/FlashSales/FlashSales';
import Categories from '../../components/Categories/Categories';
import BestSelling from '../../components/BestSelling/BestSelling';
import MusicBanner from '../../components/MusicBanner/MusicBanner';
import ExploreProducts from '../../components/ExploreProducts/ExploreProducts';
import NewArrival from '../../components/NewArrival/NewArrival';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <HeroBanner />
      <FlashSales />
      <Categories />
      <BestSelling />
      <MusicBanner />
      <ExploreProducts />
      <NewArrival />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;