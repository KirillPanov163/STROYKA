import { Router, Request, Response } from 'express';

const yandexMetrikaRouter = Router();

// Отдаем скрипт Яндекс.Метрики
yandexMetrikaRouter.get('/metrika.js', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.send(`(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) { return; }
    }
    k=e.createElement(t), a=e.getElementsByTagName(t)[0];
    k.async=1; k.src=r; a.parentNode.insertBefore(k,a);
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=103542231', 'ym');

  ym(103542231, 'init', {
    ssr: true,
    webvisor: true,
    trackHash: true,
    clickmap: true,
    ecommerce: "dataLayer",
    accurateTrackBounce: true,
    trackLinks: true
  });`);
});

// Отдаем img через редирект (для <noscript>)
yandexMetrikaRouter.get('/metrika-img', (_req: Request, res: Response) => {
  res.redirect('https://mc.yandex.ru/watch/103542231');
});

export default yandexMetrikaRouter;
