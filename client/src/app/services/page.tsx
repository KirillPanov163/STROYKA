import React from 'react';
import ServicesList from '@/entities/service/ui/ServiceList';
import '@/app/services/ServicePage.module.css';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <ServicesList />
    </div>
  );
}
