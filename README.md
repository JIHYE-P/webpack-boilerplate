# Webpack
## 1. webpack(웹팩) 이란?
* 자바스크립트 정적 모듈 번들러 (Static Module Bundler)
* 웹팩에서의 모든 것은 모듈이다. 상호 의존성이 있는 모듈들을 사용해 그 모듈들과 같은 역활은 하는 정적 에셋들을 생성한다,
* 웹팩이 실행된다면 Dependencies Graph를 통해 필요한 형태의 하나 또는 여러개 Bundler로 생성한다.
### 1-1. Module(모듈) 이란?
* 프로그램을 구성하는 구성 요소의 일부
* 관련된 데이터와 함수들이 묶여서 모듈을 형성하고 파일 단위로 나뉘는 것이 일반적이다
### 1-2. Bundler(번들러) 이란?
* 번들러는 지정한 단위로 파일들을 하나로 만들어서 요청에 대한 응답으로 전달할 수 있는 환경을 만들어주는 역할을 한다.
* 번들러를 사용하면 소스 코드를 모듈별로 작성할 수 있고 모듈간 또는 외부 라이브러리의 의존성도 쉽게 관리할 수 있다.
### 1-3. Module Bundler(모듈 번들러) 이란?
여러개의 나누어져있는 파일들을 하나의 파일로 만들어주는 라이브러리이다.     
모듈 번들러 라이브러리는 webpack, parcel등이 있다.     

여러개의 자바스크립트 파일을 하나의 파일로 묶어서 한 번에 요청을 통해 가지고 올 수 있게 하고,     
최신 자바스크립트 문법을 브라우저에서 사용할 수 있게 해준다.     
또한, 코드들을 압축하고 최적화 할 수 있기 때문에 로딩 속도를 높일 수 있다.     
수많은 파일이 하나의 파일로 묶인다면 초기 로딩 속도가 느려질 수 있지만 이를 해결하기 위해 청크, 캐시, 코드 스플릿 개념들을     
도입하면서 문제를 해결하고 있다. 

## 2. webpack 주요 4가지 개념
### 2-1. Entry
* dependency graph를 만들기 위해 필요한 `Input Source`입니다.
* 직/간접적으로 의존성을 가진 모듈들을 이해합니다.
* 여러개의 entry가 존재할 수 있습니다.
* 엔트리를 통해서 필요한 모듈을 로딩하고 하나의 파일로 묶는다.
* Default value : `./src/index.js`
### 2-2. Output 
* Webpack이 생성한 bundles의 결과물의 위치를 지정할 수 있습니다.
* Default value : `./dist/main.js`
### 2-3. Loader 
* Webpack은 오직 Javascript와 Json만 이해할 수 있는 단점이 있습니다.
* Loader는 다른 Type의 파일(img, font, stylesheet 등)을 Webpack이 이해하고 처리가능한 모듈로 변환시키는 작업을 담당합니다.
### 2-4. Plugin
* Loader가 파일단위로 처리하는 반면 플러그인은 번들된 결과물을 처리한다.
* Loader가 변환하는 동안 플러그인은 bundle optimization, asset management and injection of environment과 같은 일을 진행할 수 있다.

## 3. webpack 설치
### 3-1. package.json 설치
> npm init -y

### 3-2. webpack 설치
> npm i webpack webpack-cli --save-dev

### 3-3. webpack 라이브러리 설치
> npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader clean-webpack-plugin css-loader html-loader file-loader url-loader node-sass react react-dom sass-loader style-loader cross-env html-webpack-plugin mini-css-extract-plugin webpack webpack-cli webpack-dev-middleware

### 3-4. webpack command line 추가 `package.json`
```json
"scripts": {
  "dev": "webpack --mode development",
  "start": "npm run dev"
}
```

### 3-5. webpack 환경설정 `webpack.config.js`
```js
module.exports = {
  mode: 'development', //webpack 모드 옵션 1. development 개발모드, 2. production 빌드모드, 3. none
  entry: './src/index.js', // webpack이 빌드할 파일 경로
  output: { // 빌드 후 명시되어있는 정보를 통해 빌드파일 생성
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
}
```

### 3-6. webpack 실행
> npm run start

`dist` 폴더가 생성되면서 `/src/index.js` 파일을 빌드한 `main.js`파일이 생성된다.

## 4. webpack loader 설정
_loader 문법_
```
module : {
  rules: {
    test: '적용할 파일 정규식',
    use: [
      {
        loader: '사용할 로더 이름',
        options: { 로더 옵션 }
      }
    ]
  }
}
```
### 4-1 HTML 빌드
* `./public/index.html` html 파일생성
* `HtmlWebPackPlugin` 은 웹팩이 html 파일을 읽어서 파일을 빌드할 수 있게 해준다
```js
// webpack.config.js
module: {
  rules: [
    {
      test: /\.html$/,
      use: ['html-loader']
    }
  ]
},
plugins: [
  new HtmlWebpackPlugin({template: './public/index.html'})
],
optimization: {
  minimize: false
}
```

### 4-2 CSS, SASS 빌드
* `/src/style.css` 파일 생성
* `/src/index.js`에 `style.css` import 적용하기
* CSS Plugin 설정
```js
// webpack.config.js
rules: [
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '/'
        }
      },
      'css-loader',
      'sass-loader'
    ]
  }
]
plugins: [
  new MiniCssExtractPlugin({
    filename: 'assets/[name].css',
    chunkFilename: 'assets/[id].css'
  })
],
```
> npm start run 

webpack 실행하면 `dist/assets/main.css`가 빌드된다.

### 4-3 file 빌드
```js
{
  test: /\.(png|jpg|gif|svg)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 0, // [value]kb 미만 파일만 data-url로 처리
        name: 'assets/[hash].[ext]' // 파일명 형식
      }
    }
  ]
}
```

### 4-4 React 설정
바벨(babel)은 ES6에서 ES5로 자바스크립트를 변환해주는 역활을 한다.
> npm install --save-dev @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime

* `.babelrc` 파일 생성
```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
바벨이 ES6와 리엑트를 ES5로 변환할 수 있게 해준다.

* `./public/index.html` 수정
```html
<div id="root"></div>
```

* `./src/components/root.js` 생성
```js
import React from 'react';

const Root = ({...props}) => <h1 {...props}>Hello React</h1> 
export default Root;
```

* `./src/app.js` 생성
```js
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

ReactDOM.render(<Root />, document.getElementById('root'))
```

* `webpack.config.js` 수정
```js
entry: './src/app.js', //빌드할 파일변경
module: {
  rules: [
    //...
    {
      test: /\.(js|jsx)$/,
      use: ['babel-loader']
    }
  ]
}
```

## 5. webpack plugin 설정
### 5-1 clean-webpack-plugin 
`clean-webpack-plugin`는 빌드 할 때마다 안쓰는 파일들을 삭제해준다.
* `webpack.config.js` 수정
```js
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

plugins: [
  new CleanWebpackPlugin()
]
```

### 5-2 webpack.ProvidePlugin
모듈에서 임의의 변수로 식별될 때마다 모듈이 자동으로 로드된다. 
```js
plugins: [
  new webpack.ProvidePlugin({
    $: '모듈경로',
    isDev: '모듈경로',
  })
]
```

### 5-3 optimize-css-assets-webpack-plugin
build 할 때 .css, .scss 압축파일로 배포하기 (한줄처리)     

> npm install --save-dev optimize-css-assets-webpack-plugin

`webpack.config.js` 수정
```js
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
plugins: [
  // ...
  new OptimizeCssAssetsPlugin()
]
```

## 6. webpack optimization 설정

### 7. resolve alias + jsconfig.json
webpack `resolve` 옵션 `alias`는 `import` 또는 `require` 특정 모듈을 더 쉽게 가져 오거나 요구할 별칭을 만듭니다. 하지만 `alias`로는 에디터 내에 있는 파일들을 import 할 때 `alias` 맞게 파일이 불러오지 못하는 경우가 생긴다. VS code내에서 사용되는 `jsconfig.json`을 이용하여 import 시 `alias`에 맞게 자동완성되는 기능을 적용한다.

* `jsconfig.json`
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"],
    }
  },
  "exclude": [
    "node_modules"
  ]
}
```
`src`폴더 내의 `/*` 스키마를 통해 폴더 내의 모든 파일을 autocomplete화 한다. 예를들어 `./src/util/index.js` 파일을 import 할 때 `~/util/hello` 로 할 수 있다.

* `webpack.config.js`
```js
resolve: {
  extensions: ['.js', '.jsx'], // 파일 확장자 없이 해석하기 위한 import index.js -> import index 
  alias: {
    '~': path.resolve(__dirname, 'src')
  }
},
```


## 8. HMR (Hot Module Replacement)
> webpack 소스를 수정할 때마다 build를 해서 확인해야 하는 불편함이 있다. development 모드에서 수정할 때마다 전체 새로고침 없이 모든 종류의 모듈들을 런타임 시점에 업데이트 되게 해주는 HMR (Hot Module Replacement)을 사용한다. (production 모드에서 사용하기 위한 것이 아니다.)

* 라이브러리 설치
> npm install --save-dev express webpack-hot-middleware webpack-dev-middleware

### 8-1 webpack-hot-middleware
webpack-hot-middleware는 webpack dev server의 hot reloading과 Express 서버를 결합시키는 매우 유용한 툴이다.     
웹팩으로 빌드한 정적파일을 처리하는 익스프레스 스타일 미들웨어이다. 웹팩 패키지가 제공하는 함수를 실행하면 Compiler 타입의 인스턴스를 반환해준다. 웹팩 설정 객체를 함수 인자로 전달하는데 보통은 설정 파일 `webpack.config.js`에 있는 코드를 가져다 사용한다.

* `webpack.config.js` plugins 수정
```js
const webpack = require('webpack');
plugins: [
  //...
  new webpack.HotModuleReplacementPlugin()
]
```

### 8-2 node server 설정
* `package.json` webpack command line 수정
```js
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack",
    "start": "cross-env NODE_ENV=development node webpack/dev"
  }
}
```

* `webpack/dev.js` 파일 생성
```js
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const express = require('express');
const app = express();

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  noInfo: true, 
  publicPath: webpackConfig.output.publicPath,
  stats: 'minimal',
  historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler));
app.listen(3000, () => console.log('http://localhost:3000'));
```

* `webpack/entry.js` 파일 생성
```js
require('../src/app.js');

if(module.hot) {
  module.hot.accept();
}
```

* `webpack.config.js` 파일 수정
```js
const isDev = process.env.NODE_ENV === 'development' // 모드 구분
module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: isDev ? ['webpack-hot-middleware/client', './webpack/entry.js'] : './webpack/entry.js',
  // ...
  plugins: [
    // ...
    new webpack.HotModuleReplacementPlugin()
  ]
}
```
> npm run start

webpack 실행 시 아래와 같은 오류가 발생했다. `webpackDevMiddleware` 미들웨어에 알 수 없는 옵션이 사용되었다는 내용이다. 전에 설정할 때는 이런 오류가 없었는데 아마 버전 업데이트 되면서 전에 쓰던 옵션들이 없어진거 같다.

> Invalid options object. Dev Middleware has been initialized using an options object that does not match the API schema. options has an unknown property 'historyApiFallback'. These properties are valid. object { mimeTypes?, writeToDisk?, methods?, headers?, publicPath?, serverSideRender?, outputFileSystem?, index? }

`webpack/dev.js` 파일에서 `publicPath` 옵션만 설정하고 나머지는 삭제한다.
```js
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));
```

다시 실행하여 `http://localhost:3000`로 접속하여 css, scss, js 등 파일을 수정하면 새로고침하지 않아도 바로 적용되는걸 확인 할 수 있다.

## 참고

### CSS Build HMR 옵션
링크 참고 [mini-css-extract-plugin HMR](https://github.com/webpack-contrib/mini-css-extract-plugin#hot-module-reloading-hmr)

**개발모드에서 css, scss import 시 아래와 같은 에러 발생 시**
> Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js): ReferenceError: document is not defined

`webpack.config.js`파일 수정
```js
{
  test: /\.(sa|sc|c)ss$/,
  use: [
    isDev ? 'style-loader' : {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '/'
      }
    },
    'css-loader',
    'sass-loader'
  ]
},
```

