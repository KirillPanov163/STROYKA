'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: '/services', label: 'Услуги' },
    { href: '/portfolio', label: 'Наши работы' },
    { href: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            <div className={styles.logoContainer}>
              <div className={styles.logoImage}>
                <Image
                  src="/logo_kraska.png"
                  alt="kraska Logo"
                  width={110}
                  height={50}
                  style={{ objectFit: 'contain' }}
                  priority
                  onError={(e) => {
                    // Fallback если изображение не загрузилось
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${
                    pathname === item.href ? styles.active : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Открыть меню"
            aria-expanded={isMobileMenuOpen}
          >
            <div
              className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <ul className={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.mobileNavLink} ${
                    pathname === item.href ? styles.active : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
