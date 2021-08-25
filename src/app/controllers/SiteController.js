class SiteController {
    /**
     * TODO: [GET] /
     */
    index(req, res) {
        res.render('home');
    }
    /**
     * TODO: [GET] /search
     */
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
