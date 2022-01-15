require('dotenv').config()

module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: process.env.POSTGRE_DATABASE_PASSWORD,
    database: "pubfuture",
    define: {
      timestamps: false,
      underscored: true,
      underscoredAll: true,
    },
  };
  