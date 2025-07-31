// export default {
//   origin:
//     process.env.NODE_ENV === 'production'
//       ? ['http://localhost:5173', 'http://localhost:5174']
//       : '*',

//   optionsSuccessStatus: 200,

//   credentials: true,
// };
export default {
  origin: [
    'http://localhost:4000',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3000',
    'https://madewlove.ru',
    'https://www.madewlove.ru',
    'http://91.197.97.48:3000'
], 
  optionsSuccessStatus: 200,
  credentials: true,
};
