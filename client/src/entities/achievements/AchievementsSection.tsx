'use client';
import React from 'react';
import './AchievementsSection.css';

const AchievementsSection: React.FC = () => {
  return (
    <section className="achievements-section">
      <div className="container">
        {/* Заголовок */}
        <div className="section-header">
          <h2 className="section-title">НАШИ ДОСТИЖЕНИЯ</h2>
        </div>

        {/* Статистика */}
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">14</div>
            <div className="stat-line"></div>
            <div className="stat-description">лет работы в сфере климата</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1 450</div>
            <div className="stat-line"></div>
            <div className="stat-description">успешных проектов</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-line"></div>
            <div className="stat-description">
              наших клиентов обращаются к нам повторно
            </div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="advantages-grid">
          <div className="advantage-item">
            <div className="advantage-icon blue-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 8C16.6863 8 14 10.6863 14 14V16H12C10.8954 16 10 16.8954 10 18V30C10 31.1046 10.8954 32 12 32H28C29.1046 32 30 31.1046 30 30V18C30 16.8954 29.1046 16 28 16H26V14C26 10.6863 23.3137 8 20 8ZM20 10C22.2091 10 24 11.7909 24 14V16H16V14C16 11.7909 17.7909 10 20 10ZM15 22C15.5523 22 16 21.5523 16 21C16 20.4477 15.5523 20 15 20C14.4477 20 14 20.4477 14 21C14 21.5523 14.4477 22 15 22ZM20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22ZM25 22C25.5523 22 26 21.5523 26 21C26 20.4477 25.5523 20 25 20C24.4477 20 24 20.4477 24 21C24 21.5523 24.4477 22 25 22Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="advantage-content">
              <h3 className="advantage-title">Высокая квалификация специалистов</h3>
              <p className="advantage-description">
                наша компания имеет профильное образование и долголетний опыт работы в
                данной сфере, что гарантирует высокий уровень выполненных работ
              </p>
            </div>
          </div>

          <div className="advantage-item">
            <div className="advantage-icon green-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M8 8V32H32V8H8ZM10 10H30V30H10V10ZM12 12V14H28V12H12ZM12 16V18H20V16H12ZM22 16V18H28V16H22ZM12 20V22H16V20H12ZM18 20V22H28V20H18ZM12 24V26H24V24H12ZM26 24V26H28V24H26Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="advantage-content">
              <h3 className="advantage-title">
                Индивидуальный подход и комплексные решения
              </h3>
              <p className="advantage-description">
                мы предлагаем оптимальные решения, адаптированные под нужды каждого
                Заказчика и специфики объекта, которые позволяют обеспечить первоклассное
                выполнение поставленной задачи
              </p>
            </div>
          </div>

          <div className="advantage-item">
            <div className="advantage-icon blue-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 6C18.8954 6 18 6.89543 18 8V10H14C12.8954 10 12 10.8954 12 12V28C12 29.1046 12.8954 30 14 30H26C27.1046 30 28 29.1046 28 28V12C28 10.8954 27.1046 10 26 10H22V8C22 6.89543 21.1046 6 20 6ZM20 8H20V10H20V8ZM14 12H26V28H14V12ZM16 14V16H24V14H16ZM16 18V20H20V18H16ZM22 18V20H24V18H22ZM16 22V24H18V22H16ZM20 22V24H24V22H20ZM16 26V28H24V26H16Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="advantage-content">
              <h3 className="advantage-title">Современное оборудование</h3>
              <p className="advantage-description">
                наша компания использует только современные технологии и оборудование, что
                обеспечивает быстрое и качественное выполнение заказов клиентов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
