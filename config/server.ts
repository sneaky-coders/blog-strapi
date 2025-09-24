export default () => ({
  host: process.env.HOST || '0.0.0.0',
  port: parseInt(process.env.PORT, 10) || 1337,
  app: {
    keys: process.env.APP_KEYS ? process.env.APP_KEYS.split(',') : ['defaultKey1','defaultKey2'],
  },
});
