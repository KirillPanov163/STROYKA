'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from '@/entities/service/api/serviceThunkApi';
import type { RootState, AppDispatch } from '@/store/store'; 
import type { IService } from '@/entities/service/model/serviceTypes';
import './ServicePage.module.css';

const ServicesList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { services, isLoading, error } = useSelector((state: RootState) => state.service);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Загрузка услуг...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>Ошибка при загрузке услуг</h3>
        <p>{error}</p>
        <button onClick={() => dispatch(getAllServices())}>Попробовать снова</button>
      </div>
    );
  }

  if (!services || services.length === 0) {
    return (
      <div className="empty-container">
        <p>Услуги не найдены</p>
      </div>
    );
  }

  return (
    <div className="services-page">
      <h1>Услуги</h1>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <img src={service.images} alt={service.service} />
            <h2>{service.service}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ServiceCardProps {
  service: IService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Не указано';
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="service-card">
      <div className="service-header">
        <h3>{service.service}</h3>
        {service.id && <span className="service-id">ID: {service.id}</span>}
      </div>

      <div className="service-content">
        <div className="service-description">
          <h4>Описание:</h4>
          <p>{service.description || 'Оп��сание не указано'}</p>
        </div>

        {service.images && (
          <div className="service-images">
            <h4>Изображения:</h4>
            <div className="images-container">
              {service.images.split(',').map((image, index) => (
                <img
                  key={index}
                  src={image.trim()}
                  alt={`${service.service} - изображение ${index + 1}`}
                  className="service-image"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <div className="service-meta">
          <div className="meta-item">
            <strong>Создано:</strong> {formatDate(service.createdAt)}
          </div>
          <div className="meta-item">
            <strong>Обновлено:</strong> {formatDate(service.updatedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
