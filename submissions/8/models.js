import Sequelize from 'sequelize';
import sequelize from "./db.js";
/**
 * Because of default Sequalize fields I renamed:
 * created_at to createdAt;
 * updated_at to updatedAt;
 */
const Account = sequelize.define('account', {
  id: {
    type: Sequelize.UUID, 
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  active: {
    type: Sequelize.BOOLEAN,
  },
});

const Campaign = sequelize.define('campaign', {
  id: {
    type: Sequelize.UUID, 
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  account_id: {
    type: Sequelize.UUID, 
    defaultValue: Sequelize.UUIDV4,
    references: {
      model: Account,
      key: 'id',
    }
  },
  start_date: {
    type: Sequelize.DATE,
  },
  end_date: {
    type: Sequelize.DATE,
  },
});

const Click = sequelize.define('click', {
  id: {
    type: Sequelize.UUID, 
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  campaign_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    references: {
      model: Campaign,
      key: 'id',
    }
  },
});

export { Account, Campaign, Click };
