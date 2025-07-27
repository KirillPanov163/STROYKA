'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { getProfileThunk, refreshTokenThunk } from '@/entities/user/api/userThunkApi';
import styles from './Navigation.module.css';
import { Button } from '@/shared/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const dispatch = useAppDispatch();

  const { user, isInitialized } = useAppSelector((state) => state.user);
  const isAdmin = user?.role === 'ADMIN';

  useEffect(() => {
    if (!isInitialized) {
      dispatch(refreshTokenThunk()).then((result) => {
        if (refreshTokenThunk.fulfilled.match(result)) {
          dispatch(getProfileThunk());
        }
      });
    }
  }, [dispatch, isInitialized]);  

  if (!isInitialized) {
    // Можно вернуть лоадер, если хотите
    return null;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const baseNavItems = [
    { href: '/services', label: 'Услуги' },
    { href: '/portfolio', label: 'Наши работы' },
    { href: '/contacts', label: 'Контакты' },
  ];

  const navItems = isAdmin
    ? [...baseNavItems, { href: '/admin/menu', label: 'Админ' }]
    : baseNavItems;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            <div className={styles.logoContainer}>
              <div className={styles.logoImage}>
                <Image
                  src="/logo_oktogon.png"
                  alt="kraska Logo"
                  width={110}
                  height={50}
                  style={{ objectFit: 'contain' }}
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </Link>

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

          <Button
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
          </Button>
        </nav>

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
}
