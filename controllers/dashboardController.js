class DashboardController {
    /**
     * Handles the various APIs for displaying and managing players
     * @param {*} exampleModel
     */
    constructor(exampleModel) {
      this.exampleModel = exampleModel
    }

	async displayDashboardPage(req, res) {
        res.render('home', { 
            title: 'Home'
        });
    }
}

module.exports = DashboardController;