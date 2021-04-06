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
  },
  imagesteam: {
    log: {
      warnings: true
    },
    processor: {
      sharp: {
        cache: false,
        concurrency: 0,
        simd: true
      }
    },
    router: {
      steps: {
        fm: {
          name: 'format',
          f: 'format'
        }
      }
    },
    storage: {
      defaults: {
        driver: 'fs',
        path: process.env.MULTER_STORAGE_PATH
      },
      cache: {
        path: process.env.MULTER_STORAGE_PATH
      },
      cacheOptimized: {
        path: process.env.MULTER_STORAGE_PATH
      },
      cacheTTS: 600,
      cacheOptimizedTTS: 300,
    },
    security: {
      enabled : false
    }
  }
};

export const getConfiguration = () => Configuration;
