const Course = require('../models/Course');
class SiteController {
    /**
     * TODO: [GET] /
     */
    index(req, res) {
        Course.find({}, (err, courses) => {
            if (err) return res.status(400).json({ err: 'Failure!' });
            res.json(courses);
        });
    }
    /**
     * TODO: [GET] /search
     */
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
