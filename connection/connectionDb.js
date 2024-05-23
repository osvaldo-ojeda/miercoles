import { Sequelize } from "sequelize";

const connectionDb = new Sequelize("miercoles", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

try {
  await connectionDb.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
export default connectionDb;
