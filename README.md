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
> npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader clean-webpack-plugin css-loader html-loader file-loader url-loader node-sass react react-dom sass-loader style-loader cross-env html-webpack-plugin mini-css-extract-plugin webpack webpack-cli webpack-dev-middleware webpack-dev-server

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

## 4. webpack loader, plugin 설정
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
      {loader: MiniCssExtractPlugin.loader},
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

## 5. clean-webpack-plugin 
`clean-webpack-plugin`는 빌드 할 때마다 안쓰는 파일들을 삭제해준다.
* `webpack.config.js` 수정
```js
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
plugins: [
  new CleanWebpackPlugin()
]
```