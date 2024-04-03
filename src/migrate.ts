import 'dotenv/config';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db, pool } from './config/database';

const executeMigration = async () => {
  await migrate(db, { migrationsFolder: './src/migration' });
  await pool.end();
}

executeMigration();
