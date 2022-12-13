export const configuration = () => ({
  NODE_ENV: 'develop',
  port: parseInt('4000', 10) || 4000,
  db: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'yahircardona',
    password: 'password123',
    database: 'panini',
  },
});
