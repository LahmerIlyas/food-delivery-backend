import { User } from '../../../database/entities/User';

export const users = {
  resource: User,
  options: {
    parent: 'Gestion Des Utilisateurs',
  },
};
