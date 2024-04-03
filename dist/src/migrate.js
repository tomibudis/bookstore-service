"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const migrator_1 = require("drizzle-orm/node-postgres/migrator");
const database_1 = require("./config/database");
const executeMigration = async () => {
    await (0, migrator_1.migrate)(database_1.db, { migrationsFolder: './src/migration' });
    await database_1.pool.end();
};
executeMigration();
//# sourceMappingURL=migrate.js.map