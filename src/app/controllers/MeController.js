const course_model = require('../model/courses');
const { mutile_mongooseObject } = require('../../util/index');
const { mongooseObject } = require('../../util/index');
class NewControllers {
    StoredCouses(req, res, next) {
        course_model.find({})
            .then(courses => {
                res.render('me/storedCourses', {
                    courses: mutile_mongooseObject(courses)
                })
            })
            .catch(err => next());
    }

}
module.exports = new NewControllers;