'use client';
import styles from './page.module.css';
import FAQPage from './faq/page';
import AchievementsPage from './achievements/AchievementsWidgets';
import Slider from '@/widgets/Slider/Slider';
import ContactsPage from './contacts/page';
import { useEffect } from 'react';
import PortfolioManager from '@/entities/portfolio/ui/myWork';

export default function Home() {
  // Обработчик прогресс-бара скролла
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
      }
    };

    // Анимированные счетчики
    const animateCounters = () => {
      const counters = document.querySelectorAll('.animated-counter');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const current = parseInt(counter.textContent || '0');
        const increment = target / 100;
        
        if (current < target) {
          counter.textContent = Math.ceil(current + increment).toString();
          counter.classList.add('counting');
          setTimeout(() => counter.classList.remove('counting'), 300);
        }
      });
    };

    // Intersection Observer для анимаций появления
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          
          // Запускаем анимацию счетчиков если элемент содержит их
          if (entry.target.querySelector('.animated-counter')) {
            animateCounters();
          }
        }
      });
    }, observerOptions);

    // Наблюдаем за всеми секциями
    const sections = document.querySelectorAll('.fade-in-up');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', updateScrollProgress);
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Прогресс-бар скролла */}
      <div className="scroll-progress" id="scroll-progress"></div>
      
      {/* Floating Action Button был удален по запросу пользователя */}
      
      <div className={styles.page}>
        {/* Единый премиальный контейнер для всех секций */}
        <div className="main-content-wrapper">
          <div className="fade-in-up">
            <AchievementsPage />
          </div>
          
          <div className="section-divider"></div>
          
          <div className="fade-in-up delay-1">
            <ContactsPage />
          </div>

          <PortfolioManager/>
          
          <div className="section-divider"></div>
          
          <div className="fade-in-up delay-2">
            <Slider/>
          </div>
          
          <div className="section-divider"></div>
          
          <div className="fade-in-up delay-3">
            <FAQPage />
          </div>
        </div>
      </div>
    </>
  );
}
