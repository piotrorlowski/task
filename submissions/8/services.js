import { Account, Campaign, Click } from './models.js';

class AccountsService {
  constructor() {
    this.accounts = [];
  }

  async find() {
    return await Account.findAll({where: {active: true}});
  }

  async findByPk(pk) {
    return await Account.findByPk(pk);
  }

  async create(data) {
    const { name, active } = data;
    return Account.create({ name, active });
  }
}

class CampaignsService {
  constructor() {
    this.campaigns = [];
  }

  async find() {
    return await Campaign.findAll({});
  }

  async findByPk(pk) {
    return await Campaign.findByPk(pk);
  }

  async create(data) {
    const { name, account_id, start_date, end_date } = data;
    return Campaign.create({ name, account_id, start_date, end_date });
  }
}

class ClicksService {
  constructor() {
    this.clicks = [];
  }

  async find() {
    return await Click.findAll();
  }

  async findByPk(pk) {
    return await Click.findByPk(pk);
  }

  async create(data) {
    const { name, campaign_id } = data;
    return Click.create({ name, campaign_id });
  }
}

export { AccountsService, CampaignsService, ClicksService };
