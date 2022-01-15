import { Sequelize } from "sequelize";
import dataConfig from "../config/database";
import testconnection from '../config/testconnection';
const models = [];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dataConfig);
        models
            .map((model) => model.init(this.connection))
            .map((model) => {
            if (model.associate) model.associate(this.connection.models);
            return model;
        });
    }
}

export default new Database();
