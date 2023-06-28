import app from './app';

const PORT = process.env.APP_PORT || 3001;
const APP_NAME = process.env.APP_NAME || 'desafio-extra-ts';

app.listen(PORT, () => {
  console.log(`[${APP_NAME}] up and running on PORT ${PORT} 🚀`);
});
