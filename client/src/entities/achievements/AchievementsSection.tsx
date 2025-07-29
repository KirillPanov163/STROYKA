'use client';
import React from 'react';
import './AchievementsSection.css';

const AchievementsSection: React.FC = () => {
  return (
    <section className="achievements-section glass-section">
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
            <div className="advantage-icon ">
              <img
                src="/1vi.png" 
                alt="Высокая квалификация специалистов"
                width="60"
                height="60"
              />
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
            <div className="advantage-icon">
             
              <img
                src="/2in.png" 
                alt="Индивидуальный подход"
                width="60"
                height="60"
              />
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
            <div className="advantage-icon">
              <img
                src="/3so.png" 
                alt="Современное оборудование"
                width="60"
                height="60"
              />
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
