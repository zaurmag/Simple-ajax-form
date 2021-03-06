var path = require('./path/path.js');

module.exports = function () {
    $.gulp.task('resources:build', function(done) {
        return $.gulp.src(path.path.src.resources)
            .pipe($.plugins.changed(path.path.build.html))
            .pipe($.gulp.dest(path.path.build.html));
        done();
    });
};