import Sequelize from 'sequelize';

const sequelize = new Sequelize('porlowski', 'porlowski', 'porlowski', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

export default sequelize;
