import feathers from '@feathersjs/feathers';
import { AccountsService, CampaignsService, ClicksService } from './services.js';

const app = feathers();

app.use('accounts', new AccountsService());
app.use('campaigns', new CampaignsService());
app.use('clicks', new ClicksService());

app.service('accounts').on('created', item => {
  console.log(`A new ${item.name} account has been created`, );
});

app.service('campaigns').on('created', item => {
  console.log(`A new ${item.name} campaign has been created`, );
});

app.service('clicks').on('created', item => {
  console.log(`A new click has been created with id ${item.id}`, );
});

export { app };
