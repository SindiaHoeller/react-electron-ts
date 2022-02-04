# React-Electron-TS
This repo is a showcase for a project using react, electron and typescript, but not created with react-scripts.
Instead I built a webpack config, fitting for both react (as a webapplication) and electron.

The reason for this was, that with webpack 5 and the new react-scripts, it was not possible to use node modules (e.g. 'fs' or 'path') in the electron version of my application.

If you have any questions, feel free to ask!


This example project is showing how to use
- .png and .svg images (icons for react and electron)
- sass (automatically transpiled and minified with webpack)
- custom fonts
- typescript for both react and electron
- eslint for better code quality
- a custom nsis config for electron
- node core modules like 'fs' and 'path' usable in electron

## How to run & build
### Web
```
yarn start
# or
npm start
```
The webbrowser will not open automatically, but you can open the URL by yourself: http://localhost:3000/

```
yarn build
# OR
npm build
```
The files will then be in the "build" folder.
### Electron
```
yarn run "electron:start"
# OR
npm run "electron:start"
```
```
yarn run "electron:build"
# OR
npm run "electron:build"
```
The files will then be in the "release" folder.

## Packages
React + Wepack
```
npm i react react-dom
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader sass-loader sass webpack webpack-cli style-loader html-webpack-plugin webpack-dev-server mini-css-extract-plugin svg-url-loader
```
React + Typescript
```
npm i -D ts-loader @types/react @types/react-dom
```
Electron
```
npm i -D electron electron-builder @types/electron-devtools-installer concurrently cross-env wait-on webpack-merge 
npm i electron-devtools-installer electron-is-dev
```
React + Typescript + eslint
```
npm i -D eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
react-router
```
npm i -D @types/react-router-dom
npm i react-router-dom
```

## Explanation
### Folders
- "electron" = contains all electron files + ts config for electron
- "public" = contains base .html and it's related files, is the entry for the application
- "src" = contains all the react files
  - "components" = react pages
  - "img" = the images used in react
  - "styles" = fonts and sass files
  - "index.tsx" = entry for react, binding the react app to the "public/index.html" element with the id "app"(can have any ID you like)
- "types" = defines custom types for typescript, .tsconfig explicitly must include this folder
  - "custom.d.ts" = defines .svg and .png file type
### Config Files
- ".babelrc" = defines the babel libraries needed for react and javascript
- ".eslint.json" = defines the wanted code style, can be customized as needed, but must include react and typescript libraries
- "nsisExtra.shh" = needed for electron packaging for windows os, defined in package.json
- "tsconfig.json" = configures typescript modules and rules
- "webpack.common.js" = defines the base of needed plugins and rules
- "webpack.dev.js" = used for react development, adds some options for development only to the "webpack.common.js"
- "webpack.electron.js" = used for electron only configurations, as e.g. the target