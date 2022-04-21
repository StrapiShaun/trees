module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db-postgresql-ams3-43291-do-user-2064451-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'defaultdb'),
      user: env('DATABASE_USERNAME', 'doUser'),
      password: env('DATABASE_PASSWORD', 'AVNS_uU0zMGH3gaF1Nd4'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
