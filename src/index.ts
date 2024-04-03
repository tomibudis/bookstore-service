import app from './app';

const PORT = process.env.PORT || '3000';

app.listen(PORT, () => {
  console.info('================================');
  console.info(`🚀 App listening on the port ${PORT}`);
  console.info(`url http://localhost:${PORT}`);
  console.info('================================');
});