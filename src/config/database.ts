import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import { users } from '../entity/user.entity';
import orders from '../entity/order.entity';
import books from '../entity/book.entity';

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export const db = drizzle(pool, { schema: { users, orders, books }});