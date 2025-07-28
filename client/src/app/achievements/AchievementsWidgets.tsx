'use client';

import React from 'react';

import AchievementsSection from '@/entities/achievements/AchievementsSection';


const AchievementsWidgets: React.FC = () => {
  return (
    <div className="achievements-page">
      <AchievementsSection />
    </div>
  );
};

export default AchievementsWidgets;
