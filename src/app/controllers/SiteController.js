const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    /**
     * TODO: [GET] /
     */
    index(req, res, next) {
        // Course.find({}, (err, courses) => {
        //     if (err) return res.status(400).json({ err: 'Failure!' });
        //     res.json(courses);
        // });
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    /**
     * TODO: [GET] /search
     */
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
