const db = {};

require('dotenv').config()
db.cosmosAuthKey = process.env.AUTH_KEY;
db.databaseId = "PlayerList";

db.sqlUsername = process.env.SQLUsername
db.sqlPassword = process.env.SQLPassword
db.SQLServer = process.env.SQLServer
db.sqlDB = process.env.SQLDB

db.sqlConfig = {
	user: db.sqlUsername,
	password: db.sqlPassword,
	database: db.sqlDB,
	server: db.SQLServer,
	requestTimeout: 30000,
	pool: {
	  max: 20,
	  min: 0,
	  idleTimeoutMillis: 30000
	},
	dialectOptions: {
	  options: {
		requestTimeout: 30000
	  }
	},
	options: {
	  encrypt: true,
	  trustServerCertificate: true
	}
  }

module.exports = db;