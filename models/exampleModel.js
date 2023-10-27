// @ts-check
const sql = require("mssql")
const axios = require('axios').default;
const {sqlConfig} = require('../config/db')
const {get} = require('../controllers/sqlPoolManager')

class ExampleModel {
    contructor() {}
    
    async getRecord(example) {
		let pool = await get('default', sqlConfig);
		let result = await pool.request()
			.input("example", sql.Int, example)
			.query(`
				INSERT INTO PlayerJobs (userId, jobType, finishTime)
				SELECT @playerId, @jobType, @finishTime
				WHERE NOT EXISTS
					(SELECT TOP(1) * FROM PlayerJobs
						WHERE userId = @playerId AND active = 1)
			`)
			.catch(err => {
				console.error("Failed to getRecord")
				console.error(err)
			})

		if(result && result.rowsAffected[0] > 0) {
			return true;
		}
		return false;
	}

}

module.exports = ExampleModel