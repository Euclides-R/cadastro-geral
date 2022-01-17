const Sequelize = require("sequelize");

const sequelize = new Sequelize("pubfuture", "postgres", "eu123", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((error) => {
    console.log("Erro ao conectar com DB!", error);
  });

export default sequelize;
