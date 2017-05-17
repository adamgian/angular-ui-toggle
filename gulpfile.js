var _ = require('lodash');
var annotate = require('gulp-ng-annotate');
var babel = require('gulp-babel');
var cleanCSS = require('gulp-clean-css');
var ghPages = require('gulp-gh-pages');
var gulp = require('gulp');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var rimraf = require('rimraf');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', ['build']);
gulp.task('build', ['js', 'js:min', 'css', 'css:min']);


gulp.task('serve', ['build'], function() {
	var monitor = nodemon({
		script: './demo/server.js',
		ext: 'js css',
		ignore: ['**/*.js', '**/.css'], // Ignore everything else as its watched seperately
	})
		.on('start', function() {
			console.log('Server started');
		})
		.on('restart', function() {
			console.log('Server restarted');
		});

	watch(['./index.js', 'demo/**/*.js', 'src/**/*.js'], function() {
		console.log('Rebuild client-side JS files...');
		gulp.start('js');
	});

	watch(['demo/**/*.css', 'src/**/*.css'], function() {
		console.log('Rebuild client-side CSS files...');
		gulp.start('css');
	});
});


gulp.task('js', ()=> {
	gulp.src('./src/angular-ui-toggle.js')
		.pipe(rename('angular-ui-toggle.js'))
		.pipe(babel({presets: ['es2015']}))
		.pipe(annotate())
		.pipe(gulp.dest('./dist'));
});

gulp.task('js:min', ()=> {
	gulp.src('./src/angular-ui-toggle.js')
		.pipe(rename('angular-ui-toggle.min.js'))
		.pipe(babel({presets: ['es2015']}))
		.pipe(annotate())
		.pipe(uglify({mangle: false}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('css', ()=>
	gulp.src('./src/angular-ui-toggle.css')
		.pipe(rename('angular-ui-toggle.css'))
		.pipe(sass())
		.pipe(gulp.dest('./dist'))
);

gulp.task('css:min', ()=>
	gulp.src('./src/angular-ui-toggle.css')
		.pipe(rename('angular-ui-toggle.min.css'))
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(gulp.dest('./dist'))
);


gulp.task('gh-pages', ['build'], function() {
	rimraf.sync('./gh-pages');

	return gulp.src([
		'./LICENSE',
		'./demo/_config.yml',
		'./demo/app.js',
		'./demo/index.html',
		'./demo/toggle.json',
		'./demo/style.css',
		'./dist/**/*',
		'./node_modules/angular/angular.min.js',
	], {base: __dirname})
		.pipe(rename(function(path) {
			if (path.dirname == 'demo') { // Move all demo files into root
				path.dirname = '.';
			}
			return path;
		}))
		.pipe(ghPages({
			cacheDir: 'gh-pages',
			push: true, // Change to false for dryrun (files dumped to cacheDir)
		}))
});
