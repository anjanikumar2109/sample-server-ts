import {Sequelize} from "sequelize-typescript";
import * as path from "path";

/**
 * Creates DB connection
 * @returns {Promise<any>}
 */
export function createConnection() {
    return new Sequelize({
        name: 'sample-server',
        dialect: 'postgres',
        username: 'postgres',
        password: '*****',
        modelPaths: [path.join('..', __dirname, 'entity')]
    }).sync({force: false});
}