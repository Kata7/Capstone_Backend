module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/capstone'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost/capstone'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}