import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

export const Configuration = {
    bcryptSaltRounds: 10,
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: ['dist/src/database/entities/*{.ts,.js}'],
      subscribers: ['dist/src/database/subscribers/*{.ts,.js}'],
      synchronize: false,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
      migrationsTransactionMode: 'each',
      logging: 'all',
      cli: {
        migrationsDir: 'migrations',
      },
    } as TypeOrmModuleOptions,
  sentrydsn: process.env.SENTRY_DSN,

};

export const getConfiguration = () => Configuration;