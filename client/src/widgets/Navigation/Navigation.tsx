import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Kondey</div>
        <ul className={styles.menu}>
          <li>Услуги</li>
          <li>Наши работы</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
