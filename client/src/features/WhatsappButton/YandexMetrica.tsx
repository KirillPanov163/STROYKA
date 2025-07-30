'use client';

import { useEffect } from 'react';

export  const YandexMetrika = () => {
  useEffect(() => {
    const id = 103542231;
    const src = `https://mc.yandex.ru/metrika/tag.js?id=${id}`;

    // Проверка: уже загружен?
    if (document.querySelector(`script[src="${src}"]`)) return;

    // Создаём скрипт
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;

    // Добавляем в <head>
    document.head.appendChild(script);

    // Инициализация после загрузки
    script.onload = () => {
      if (typeof window !== 'undefined' && 'ym' in window) {
        (window as any).ym(id, 'init', {
          ssr: true,
          webvisor: true,
          trackHash: true,
          clickmap: true,
          ecommerce: 'dataLayer',
          accurateTrackBounce: true,
          trackLinks: true,
        });
      }
    };
  }, []);

  return (
    <noscript>
      <div>
        <img
          src="https://mc.yandex.ru/watch/103542231"
          style={{ position: 'absolute', left: '-9999px' }}
          alt=""
        />
      </div>
    </noscript>
  );
};
