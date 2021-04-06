import {Configuration} from '../config/Configuration';

import fs = require('fs');

const typeormConfig = {
  ...Configuration.database,
  entities: ['src/database/entities/*{.ts,.js}'],
  subscribers: ['src/database/subscribers/*{.ts,.js}'],
};

console.log(typeormConfig)
fs.writeFileSync('ormconfig.json', JSON.stringify(typeormConfig, null, 2));
