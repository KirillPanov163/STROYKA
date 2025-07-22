import express from 'express';
import dotenv from 'dotenv';
// import path from 'path'; // <== добавляем
import serverConfig from './configs/serverConfig.js';
import indexRouter from './routes/index.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

serverConfig(app);

app.use('/api', indexRouter);

// const __dirname = path.resolve();
// const clientBuildPath = path.join('/root/madewlove/client/dist');

// app.use(express.static(clientBuildPath));

// app.get(/(.*)/, (req, res) => {
//   if (!req.url.startsWith('/api')) {
//     res.sendFile(path.join(clientBuildPath, 'index.html'));
//   }
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(
    `Database URL: ${process.env.DATABASE_URL ? 'Configured' : 'Not configured'}`,
  );
  console.log(
    `JWT Secrets: ${
      process.env.ACCESS_TOKEN_SECRET && process.env.REFRESH_TOKEN_SECRET
        ? 'Configured'
        : 'Not configured'
    }`,
  );
});
