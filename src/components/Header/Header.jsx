
import React, { useState } from 'react';
import { 
  Search, ShoppingCart, Heart, Menu, Phone, 
  ChevronDown, ChevronRight, X, Home, Info, UserPlus
} from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [language, setLanguage] = useState('English');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [womanExpanded, setWomanExpanded] = useState(false);
  const [menExpanded, setMenExpanded] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#">ShopNow</a></p>
          <div className={styles.languageSelector} onClick={() => setShowLangMenu(!showLangMenu)}>
            <span>{language}</span>
            <ChevronDown size={16} />
            {showLangMenu && (
              <div className={styles.langDropdown}>
                <div onClick={(e) => { e.stopPropagation(); setLanguage('English'); setShowLangMenu(false); }}>English</div>
                <div onClick={(e) => { e.stopPropagation(); setLanguage('العربية'); setShowLangMenu(false); }}>العربية</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <h1 className={styles.logo}>Exclusive</h1>
          <Menu className={styles.menuIcon} size={24} onClick={() => setShowMobileMenu(!showMobileMenu)} />
          <ul className={styles.navMenu}>
            <li><a href="#" className={styles.active}>Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
          <div className={styles.navActions}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="What are you looking for?" />
              <Search size={20} />
            </div>
            <Heart size={28} strokeWidth={1.5} />
            <ShoppingCart size={28} strokeWidth={1.5} />
          </div>
          <div className={styles.navActionsMobile}>
            <Heart size={22} strokeWidth={1.5} />
            <ShoppingCart size={22} strokeWidth={1.5} />
          </div>
        </div>
      </nav>
      {showMobileMenu && (
        <div className={styles.mobileMenuOverlay} onClick={() => setShowMobileMenu(false)}>
          <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.mobileMenuHeader}>
              <h2>Menu</h2>
              <button onClick={() => setShowMobileMenu(false)}><X size={24} /></button>
            </div>
            <div className={styles.mobileMenuContent}>
              <div className={styles.mobileSearchBar}>
                <input type="text" placeholder="What are you looking for?" />
                <Search size={20} />
              </div>
              <div className={styles.mobileNavLinks}>
                <a href="#" className={styles.mobileNavItem}>
                  <Home size={20} />
                  <span>Home</span>
                </a>
                <a href="#" className={styles.mobileNavItem}>
                  <Phone size={20} />
                  <span>Contact</span>
                </a>
                <a href="#" className={styles.mobileNavItem}>
                  <Info size={20} />
                  <span>About</span>
                </a>
                <a href="#" className={styles.mobileNavItem}>
                  <UserPlus size={20} />
                  <span>Sign Up</span>
                </a>
              </div>
              <div className={styles.mobileMenuDivider}></div>
              <div className={styles.mobileCategories}>
                <h3>Categories</h3>
                <ul>
                  <li onClick={() => setWomanExpanded(!womanExpanded)} className={styles.expandable}>
                    <span>Woman's Fashion</span>
                    <ChevronRight size={16} className={womanExpanded ? styles.rotated : ''} />
                  </li>
                  {womanExpanded && (
                    <ul className={styles.submenu}>
                      <li>Dresses</li>
                      <li>Tops</li>
                      <li>Shoes</li>
                    </ul>
                  )}
                  <li onClick={() => setMenExpanded(!menExpanded)} className={styles.expandable}>
                    <span>Men's Fashion</span>
                    <ChevronRight size={16} className={menExpanded ? styles.rotated : ''} />
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
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
