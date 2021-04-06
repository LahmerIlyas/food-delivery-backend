import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

export const TestConfiguration = {
    bcryptSaltRounds: 10,
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      type: 'postgres',
      url: process.env.TEST_DATABASE_URL,
      entities: ['src/database/entities/*{.ts,.js}'],
      subscribers: ['src/database/subscribers/*{.ts,.js}'],
      synchronize: false,
      migrations: ['migrations/*{.ts,.js}'],
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

export const getTestConfiguration = () => TestConfiguration;