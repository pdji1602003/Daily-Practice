/*
What is npm?
1. Node Package Manager
2. Pre-installed with node.js
3. Easily install modules/packages on your system
4. Modules are basically JavaScript libraries
5. Makes it easy for developers to share and reuse codes
*/

/*
What I will learn in this crash course
1. Install, remove, update and list packages
2. All about package.json
3. Local & global packages
4. Dependencies/dev-dependencies
5. Commands & shortcuts
6. Versioning
7. NPM scripts
*/

/*
Package.json file
1. Manifest files with app info
2. Lists dependencies(name & version)
    為何我們需要知道我們使用了哪些dependencies?
    假設我們現在完成了我們app的製作，想把該app push到GitHub上以供人下載使用，
    我們不想把這app依賴的的libraries, modules也一併push上去，避免檔案肥大。
    我們可以選擇push主檔案以及package.json上GitHub即可。
    當有人瀏覽到我們的code repo並想下載之，
    因為我們package.json有列出這個app依賴的第三方資源，
    對方即可透過運行terminal並下npm install指令，
    查找並一併下載package.json裡列出的第三方資源。

    換言之，在package.json裡列出所有該app的第三方資源，
    不只可以讓人清楚知道我們開發的這個app使用到哪些第三方資源，
    還可以讓人透過npm install指令自動查找並下載這些第三方資源，
    以成功使用我們開發的app。

    若沒有包含package.json，則下載app的人，就會因為缺乏app
    依賴的第三方資源而無法成功運行我們的app。
    
3. Specify if version should be updated
4. Create npm scripts
5. Easily create with "npm init"
6. dependencies:專門用於生產環境的依賴資源
7. devdependencies：專門用於開發環境的依賴資源
*/

/*
相關Commands 
1. npm -v or npm --version:查看版本號
2. npm:列出所有資訊
3. npm init:建立pakage.json
4. 預設所有答案為yes的情況下建立package.json:npm init -y
5. 更改package.json預設的答案
    npm config set init-author-name "Linyin Huang"
    npm set init-license "MIT" 
6. 查看package.json預設答案：
    npm (config) get init-author-name
7. 刪除package.json答案(將更改答案回復成預設狀態)
    npm config delete init-author-name
    npm config delete init-license    
8. npm install:安裝下載的app(含所有第三方資源，包含dev&regular dependencies)
9. npm install -- production:只下載regular dependencies
10.npm uninstall gulp-sass --save-dev
11.npm remove gulp --save-dev:移除用於開發環境的gulp(remove可以簡寫為rm，此指令作用等同於uninstall)
12.npm install lodash@4.17.3:自設版本
13.npm update lodash
*/

// 使用module
//以下為使用lodash實作
const _ = require('lodash');
//import _ from 'lodash'; ES6 語法版本
const numbers = [33, 46, 76, 44, 32, 3];
_.each(numbers, function (number, i) {//查一下forEach的用法
    console.log(number);
})

/*
Semantic versioning
The Numbers
    8.2.6(此號碼對應以下說明)
Major verion///Minor version///Patch(中文是補丁的意思)
Major changes///New features///Fix bugs
Break the API///Does not break the API///
重大改變，///可能是app開發人員新增功能，改變幅度較小/發現一些bug，所以需要修補(patch)
會改變原先語法
由小到大的的改變，這邏輯思路還蠻合理的
*/

/*
為何要解釋以上的語意化版本(Semantic version)呢？
因為我們要看一下在package.json dependencies所使用的這個符合"^"，
它帶有什麼意思呢？

{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "script.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Lin",
  "license": "MIT",
  "dependencies": {
    "lodash": "^4.17.15",保有major version 4, 升級到最新的minor version(預設作法)
    "lodash": "~4.17.15",保有major verion and minor version，升級最新的patch
    "lodash": "4.17.15",下載此標明版本，完全不管lodash是否有進行任何更新
    "lodash": "*"升級至最新版本(如果有5.0.0以上的版本，即下載之，但"超級"不建議這麼做，因為可能會因為相容性的問題break your app)
  },
  "devDependencies": {}
}
*/
