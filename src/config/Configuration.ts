import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

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
      ssl: isProduction,
      cli: {
        migrationsDir: 'migrations',
      },
    } as TypeOrmModuleOptions,
  sentrydsn: process.env.SENTRY_DSN,
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
    signOptions: { expiresIn: '60s' },
  },
  multer: {
    dest: process.env.MULTER_STORAGE_PATH
  },
  fbConfig: {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
  },
  googleConfig: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }
};

export const getConfiguration = () => Configuration;