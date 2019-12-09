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
