export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'http://10.84.5.40')
  // admin: {
  //   autoReload: {
  //     enabled: true // Должно быть true для WS
  //   }
  // },
  // cors: {
  //   origin: ['http://10.84.5.40'],
  //   headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With', 'X-HTTP-Method-Override'],
  //   keepHeaderOnError: true,
  // },
  // url: 'http://10.84.5.40'
});
