# es6

#Commands for actual js lib and webpack on cmd line but change package.json file "scripts": "start":"webpack --mode development"

npm i webpack@4.12.0 webpack-cli@3.0.3 --save-dev

#Installing server which contiously runs the code but change the package.json to "scripts": "start":"webpack-dev-server --mode development"

npm i webpack-dev-server@3.1.4 --save-dev 

#Transpiler -> Downloading the Transpilers ie babel so that our js will run properly in the old browsers

npm i babel-core@6.26.3 babel-loader@7.1.4 babel-preset-env@1.7.0 --save-dev