import { INestApplication } from '@nestjs/common';
import AdminBro from 'admin-bro';
import { Database } from '@admin-bro/typeorm';
//import AdminBroExpress from '@admin-bro/express';
import { TypeormStore } from 'typeorm-store';
import { Session } from '../database/entities/Session';
import { CustomResource } from './adapters/CustomResource';
import {Configuration} from '../config/Configuration';
import { theme } from './theme';
import { authenticateUser } from './helpers/auth';
import { resources } from './resources';
import { locale } from './locale';

const AdminBroExpress = require('@admin-bro/express');

export async function setupAdminPanel(app: INestApplication): Promise<void> {
  AdminBro.registerAdapter({ Database: Database, Resource: CustomResource });

  const adminBro = new AdminBro({
    rootPath: '/admin',
    resources: resources,
    branding: {
      companyName: 'Dashboard',
      softwareBrothers: false,
      //logo: Configuration.getLogoURL(),
      theme,
    },
    version: {
      app: "Tableau d'administration",
    },
    locale: locale,
  });

  /** Create router */
  const router = AdminBroExpress.buildAuthenticatedRouter(
    adminBro,
    {
      //TODO:: set this as a environment variable
      cookiePassword: 'dzaddcasqfc',
      authenticate: async (email, password) =>
        await authenticateUser(email, password),
    },
    undefined,
    {
      resave: false,
      saveUninitialized: false,
      store: new TypeormStore({ repository: Session.getRepository() }),
    },
  );

  /** Bind routing */
  app.use(adminBro.options.rootPath, router);
}
