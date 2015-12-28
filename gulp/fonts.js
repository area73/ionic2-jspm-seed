'use strict';

var gulp = require('gulp');
var System  = require('systemjs');
var path    = require('path');
var fs      = require('fs');

function getIonicFontsPaths() {
	if (Object.keys(System.map).length === 0) {
		eval(fs.readFileSync(global.paths.systemConfig, 'utf8'));
	}

 	var ionicUrl = System.normalizeSync('ionic');
  	var ionicDir = path.resolve(ionicUrl.replace('file:', '').replace('.js', ''));

  	ionicDir = "." + ionicDir + "/";

  	return [
	    ionicDir + 'fonts/**/*.ttf',
	    ionicDir + 'fonts/**/*.woff'
	];
}

gulp.task('copy.fonts.dev', function () {
 return gulp.src(getIonicFontsPaths()).pipe(gulp.dest(global.paths.fontsDev));
});

gulp.task('copy.fonts.dist', function () {
 return gulp.src(getIonicFontsPaths()).pipe(gulp.dest(global.paths.fontsDist));
});

