const course_model = require('../model/courses');
const { mutile_mongooseObject } = require('../../util/index');
const { mongooseObject } = require('../../util/index');
// const courses = require('../model/courses');
class CourseController {
    index(req, res, next) {
        // // //từ Controller home kết nối với dữ liệu của mongoDB thông qua mongoose
        //CÁCH 1: mongoose sử dụng Calback
        // course.find({}, function(err, course) {
        //     if (!err) {
        //         //sử dụng phương thức JSON để trả dữ liệu cho browser
        //         res.json(course);
        //     } else {
        //         //cứ mỗi lần lỗi ko load dc dữ liệu thì sẽ chạy next 1 lần( giúp ta tập trung sửa lỗi ở 1 nơi)
        //         next();
        //         // res.status(404).json({ error: 'ERROR!!!' });
        //     }
        // });

        //Cách 2: mongoose sử dụng PROMISES
        // course.find({})
        //     .then(course => {
        //         res.json(course);
        //     })
        //     .catch(err => { next(err) });
        course_model.find({})
            .then(courses => {
                res.render('courses', { courses: mutile_mongooseObject(courses) });
            })
            .catch(err => next());
    }
    show(req, res, next) {
            course_model.findOne({ slug: req.params.slug })
                .then(courses => {
                    res.render('courses/show', { courses: mongooseObject(courses) });
                })
                .catch(err => next());
        }
        //[GET] /courses/create
    create(req, res, next) {
            res.render('courses/create');
        }
        //[POST] /courses/store
    store(req, res) {
            const formData = req.body;
            formData.img = `https://i.ytimg.com/vi/${req.body.videoID}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IV...`;
            const courses = new course_model(formData);
            courses.save()
                .then(() => { res.redirect('/courses') })
                .catch((err) => {

                })
        }
        //[GET] courses/:slug/edit
    edit(req, res, next) {
            course_model.findById(req.params.id)
                .then(courses => res.render('courses/edit', { courses: mongooseObject(courses) }))
                .catch(err => next())
        }
        //[PUT] courses/:id
    update(req, res, next) {
        course_model.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(err => { next() });
    }

    //[DELETE] courses/:id/delete
    deleteOne(req, res, next) {
        course_model.delete({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(err => { next() });
    }
}
module.exports = new CourseController;