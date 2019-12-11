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

`$ npm install --save-dev gulp-watch gulp-livereload`

## Usage

```js
  "scripts": {
    "start": "gulp dev:extension",
```

`$ yarn start`

Finished 'dev:copy:locales' after 84 ms
Finished 'dev:copy' after 91 ms

### copyDevTaskNames

locales images contractImages fonts vendor
app/scripts 整個資料夾 打包成 chromereload.js
app下的每個html檔全數複製至dist
app下的每個json檔(只有manifest)複製至dist

#### vendor

內有trezor的溝通  `chrome.runtime.connect

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
Finished 'dev:copy:locales'

`$ gulp`

Task never defined: default
To list available tasks, try running: `gulp --tasks`

使用 `gulp.series()` 來打包任務
`gulp.parallel()` 能夠在非同步狀態下同時進行此任務

### background.js

```js
gulp.task('dev:extension',
  gulp.series(
    ...
    gulp.parallel(
      'dev:extension:js',
      ...
    )
  )
)
```

createTasksForBuildJsExtension createTasksForBuildJs  bundleTask
performBundle  generateBundler configureBundleForSesify

`$ npm install --save-dev gulp-sourcemaps`
`$ npm install --save-dev lodash.assign`

#### npm

`npm install --save-dev gulp-babel`
`npm install babel-core  --save-dev` add

`npm install --save-dev watchify`
`npm install --save-dev browserify`
`npm install --save-dev browserify-transform-tools`
`npm install --save-dev envify`

`npm install --save-dev gulp-util`
gulp-util is deprecated 

`npm install --save-dev vinyl-source-stream`
`npm install --save-dev vinyl-buffer`

`npm install --save-dev brfs`  brfs no need to require
`npm install --save-dev babelify` no need to require

Use conventional text streams at the start of your gulp  pipelines

[gulp的ES6轉換報錯 Cannot find module 'babel-core'](https://www.itread01.com/content/1546515742.html)
gulp-babel

envify轉換模塊

#### dependencies

```js
"dependencies": {
```

npm i browserify-derequire
npm i metamask-inpage-provider
npm i post-message-stream
npm i web3 web3-stream-provider
npm i @babel/runtime
npm i eth-json-rpc-errors eth-json-rpc-filters eth-json-rpc-infura eth-keyring-controller
npm i lodash.debounce lodash.shuffle
npm i debounce debounce-stream  
npm i extension-port-stream
npm i eth-block-tracker eth-contract-metadata eth-ens-namehash
npm i ramda
`npm i luxon` Luxon is a library for working with dates and times in Javascript.
npm i fast-json-patch
`npm i dnode` dnode is an asynchronous rpc system for node.js 

`npm i extensionizer`  A module for writing cross-browser extensions

npm i etherscan-link
npm i ethjs ethjs-contract ethjs-ens ethjs-query
npm i deep-freeze-strict deep-extend
npm i asmcrypto.js nanoid
`npm i nonce-tracker` How metamask calculates nonces
`npm i rpc-cap`  RPC Capabilities Middleware
npm i content-hash
npm i extension-port-stream 
`npm i percentile` Calculate a percentile for given array of values.
npm i eth-ledger-bridge-keyring  eth-method-registry eth-phishing-detect eth-sig-util eth-token-tracker eth-trezor-keyring
npm i gaba
npm i abortcontroller-polyfill
npm i single-call-balance-checker-abi

`npm i 3box` This is a library which allows you to set, get, and remove private and public data associated with an ethereum account.
npm i jsonschema

npm i @sentry/browser
npm i abi-decoder
npm i swappable-obj-proxy


#### npm dubug

[Cannot find module '@babel-core' error #150](https://github.com/babel/gulp-babel/issues/150)
默认安装的版本是next 8.0.0 而babel-core默认装的6.26.3 导致不匹配，gulp-babel@^8.0.0要求babel-core^7.0.0。
解决方法：安装匹配的gulp-babel 和babel-core

"gulp-babel": "^8.0.0", 新版
metamask 原版 "gulp-babel": "^7.0.0",


解决方法：`npm install --save-dev babelify@10 babel-core`
  babelify@10.0.0
+ babel-core@6.26.3


#### gyp ERR!

[Electron npm install 常见错误（Windows）](https://www.cnblogs.com/lovesong/p/11192194.html)
Visual Studio Build Tools 2017 修改

### load extension

無法載入擴充功能

已使用語言代碼，但是仍未在資訊清單中指定 default_locale。
無法載入資訊清單。

安裝指定的語系包`en`或更換設定
manifest.json
{
  "default_locale": "zh_TW",
}

## References

[trezor](https://trezor.io/) Is a secure place that contains one or more currency purses
[MetaMask 支持 3Box 備份錢包數據](https://www.chainnews.com/zh-hant/news/540693176043.htm)
