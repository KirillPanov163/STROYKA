import { Router } from 'express';
import fetch from 'node-fetch';

const goodappRouter = Router();

goodappRouter.get('/goodapp-widget.js', async (req, res) => {
  try {
    const url = `https://widget.yourgood.app/script/widget.js?id=a598c526-2e49-49db-9de6-7478e691d6b0&now=${Date.now()}`;
    const response = await fetch(url);
    const body = await response.text();

    res.set('Content-Type', 'application/javascript');
    res.set('Cache-Control', 'public, max-age=86400');
    res.send(body);
  } catch (error) {
    res.status(500).send('Error fetching script');
  }
});

goodappRouter.get('/images/:imageName', async (req, res) => {
  try {
    const imageName = req.params.imageName;
    const response = await fetch(`https://widget.yourgood.app/script/images/${imageName}`);
    const contentType = response.headers.get('content-type');
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (contentType) res.set('Content-Type', contentType);
    res.set('Cache-Control', 'public, max-age=86400');
    res.send(buffer);
  } catch (error) {
    res.status(500).send('Error fetching image');
  }
});

const YANDEX_BASE = 'https://mc.yandex.ru';

goodappRouter.get('/metrika/tag.js', async (req, res) => {
  try {
    const response = await fetch(`${YANDEX_BASE}/metrika/tag.js`);
    const body = await response.text();

    res.set('Content-Type', 'application/javascript');
    res.set('Cache-Control', 'public, max-age=86400');
    res.send(body);
  } catch (error) {
    res.status(500).send('Error fetching Yandex Metrika script');
  }
});

goodappRouter.get('/watch/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const url = `${YANDEX_BASE}/watch/${id}`;
    const response = await fetch(url);

    const contentType = response.headers.get('content-type');
    if (contentType) res.set('Content-Type', contentType);

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.set('Cache-Control', 'public, max-age=86400');
    res.send(buffer);
  } catch (error) {
    res.status(500).send('Error fetching Yandex Metrika pixel');
  }
});

export default goodappRouter;
