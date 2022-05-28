import { Account, Campaign, Click } from './models.js';
import { app } from './app.js';
import sequelize from "./db.js";

const main = async () => {
  Account.destroy({ where: {} });
  Campaign.destroy({ where: {} });
  Click.destroy({ where: {} });

  const randomName = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result
  }
  
  const range = n => Array.from(Array(n).keys())
  
  const accountNames = range(3).map(item => randomName(5));
  
  const campaignsOne = range(2);
  const campaignsTwo = range(3);
  const campaignsThree = range(4);

  const accountTrx = await sequelize.transaction();

  accountNames.forEach(async item => {
    await app.service('accounts').create({
      name: item,
      active: true,
    }, { transaction: accountTrx });
  });

  await accountTrx.commit();

  const accountOne = await Account.findOne({ where: { name: accountNames[0] } });
  const accountTwo = await Account.findOne({ where: { name: accountNames[1] } });
  const accountThree = await Account.findOne({ where: { name: accountNames[2] } });

  campaignsOne.forEach(async item => {
    await app.service('campaigns').create({
      name: randomName(10),
      account_id: accountOne.id,
      start_date: new Date(2022, 4, 1),
      end_date: new Date(2022, 4, 4),
    });
  });

  campaignsTwo.forEach(async item => {
    await app.service('campaigns').create({
      name: randomName(10),
      account_id: accountTwo.id,
      start_date: new Date(2022, 4, 1),
      end_date: new Date(2022, 4, 4),
    });
  });

  campaignsThree.forEach(async item => {
    await app.service('campaigns').create({
      name: randomName(10),
      account_id: accountThree.id,
      start_date: new Date(2022, 4, 1),
      end_date: new Date(2022, 4, 4),
    });
  });

  const createdCampaignsOne = await Campaign.findAll({ where: { account_id: accountOne.id } });
  const createdCampaignsTwo = await Campaign.findAll({ where: { account_id: accountTwo.id } });
  const createdCampaignsThree = await Campaign.findAll({ where: { account_id: accountThree.id } });

  createdCampaignsOne.forEach(async item => {
    await app.service('clicks').create({
      campaign_id: item.id,
    });
  })

  createdCampaignsTwo.forEach(async item => {
    await app.service('clicks').create({
      campaign_id: item.id,
    });
  })

  createdCampaignsThree.forEach(async item => {
    await app.service('clicks').create({
      campaign_id: item.id,
    });
  })
};

main();
