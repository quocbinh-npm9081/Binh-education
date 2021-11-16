const newRoutes = require('./newRoutes');
const siteRoutes = require('./siteRoutes');
const coursesRoutes = require('./coursesRoutes')
const meRoutes = require('./meRoutes');

function route(app) {
    app.use('/courses', coursesRoutes);
    app.use('/me', meRoutes);
    app.use('/news', newRoutes);
    app.use('/', siteRoutes);
}

module.exports = route;