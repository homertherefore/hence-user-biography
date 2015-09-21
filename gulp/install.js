import gulp from 'gulp';
import {execSync} from 'child_process';

gulp.task('install-deps', function (done) {
  //execSync('npm i -g karma-cli', {stdio: 'inherit'});
  //execSync('npm i', {stdio: 'inherit'});
  execSync('bower i', {stdio: 'inherit'});
  execSync("gem update && gem install compass susy modular-scale breakpoint scss_lint font-awesome-sass", {stdio: 'inherit'});

  done();
});
