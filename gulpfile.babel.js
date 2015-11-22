import gulp       from 'gulp';
import babel      from 'gulp-babel';
import eslint     from 'gulp-eslint';
import sass       from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import plumber    from 'gulp-plumber';
import webserver  from 'gulp-webserver';

gulp.task('lint', () => {
  return gulp.src(['./gulpfile.babel.js', './js/src/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('babel', () => {
  return gulp.src('./js/src/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./js'));
});

gulp.task('watch_babel', () => {
  return gulp.watch('./js/src/*.js', ['lint', 'babel']);
});

gulp.task('sass', () => {
  return gulp.src('./css/src/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch_sass', () => {
  return gulp.watch('./css/src/*.scss', ['sass']);
});

gulp.task('webserver', () => {
  return gulp.src('./')
    .pipe(webserver({ port: 9000, livereload: true }));
});

gulp.task('default', ['lint', 'babel', 'sass', 'webserver',
                      'watch_babel', 'watch_sass']);
