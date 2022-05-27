import { Account } from './models.js';

class AccountsService {
  constructor() {
    this.accounts = [];
  }

  async find() {
    return await Account.findAll({where: {active: true}});
  }

  async create(data) {
    const { name, active } = data;
    return Account.create({ name, active });
  }
}

export { AccountsService };
