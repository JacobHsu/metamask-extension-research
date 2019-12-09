# metamask-extension-research

MetaMask/[metamask-extension](https://github.com/MetaMask/metamask-extension)
[releases](https://github.com/MetaMask/metamask-extension/releases) metamask-chrome-7.7.0.zip

## gulp

[Quick Start](https://gulpjs.com/docs/en/getting-started/quick-start)  

gulpfile.js

```js
const livereload = require('gulp-livereload')
// browser reload

gulp.task('dev:reload', function () {
  livereload.listen({
    port: 35729,
  })
})
```

[gulp-livereload](http://kejyun.github.io/gulp-learning-notes/plguins/Tool/Plugins-Tool-gulp-livereload.html)  

$ npm install --save-dev gulp-watch gulp-livereload

## Usage

```js
  "scripts": {
    "start": "gulp dev:extension",
```

`$ yarn start`

Finished 'dev:copy:locales' after 84 ms
Finished 'dev:copy' after 91 ms

## Notes

copyDevTaskNames 放入如語系打包工作
gulp任務系列並行執行輸出到dist

```js
gulp.task('dev:copy',
  gulp.series(
    gulp.parallel(...copyDevTaskNames),
  )
)
```

`$ gulp`

Task never defined: default
To list available tasks, try running: `gulp --tasks`

使用 `gulp.series()` 來打包任務
`gulp.parallel()` 能夠在非同步狀態下同時進行此任務
