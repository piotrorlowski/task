import sequelize from "./db.js";
import Sequelize from 'sequelize';

const Account = sequelize.define('account', {
  name: {
    type: Sequelize.STRING,
  },
  active: {
    type: Sequelize.BOOLEAN,
  },
});

const Campaign = sequelize.define('campaign', {
  name: {
    type: Sequelize.STRING,
  },
  account_id: {
    type: Sequelize.INTEGER,
  },
  start_date: {
    type: Sequelize.DATE,
  },
  end_date: {
    type: Sequelize.DATE,
  },
});

const Click = sequelize.define('click', {
  campaign_id: {
    type: Sequelize.INTEGER,
  },
});

export { Account, Campaign, Click };
