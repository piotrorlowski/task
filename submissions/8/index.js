import feathers from '@feathersjs/feathers';
const app = feathers();
import { AccountsService } from './services.js';


app.use('accounts', new AccountsService());

app.service('accounts').on('created', account => {
  console.log('A new account has been created', account);
});

const main = async () => {
  await app.service('accounts').create({
    name: 'John Doe',
    active: true,
  });

  await app.service('accounts').create({
    name: 'Dorothy Smith Inactive',
    active: false,
  });

  const accounts = await app.service('accounts').find();

  console.log('All accounts', accounts);
};

main();
