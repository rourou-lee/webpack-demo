//引入webpack-dev-middleware
const webpackHotMiddleware=require('webpack-hot-middleware');
const express=require('express');
const webpack= require('webpack');
const webpackMiddleware=require('webpack-dev-middleware');
//引入webpack的配置文件
const config=require('./webpack.config.js');
//node下webpack的api,用webpack结合config,编译文件
const complier=webpack(config);
//服务器实例
const app=express();  
//使用中间件,只要文件变化，compiler就会重新编译，打包输出的路径就是config文件下的output的publicPath
app.use(webpackMiddleware(complier,{
   // publicPath:config.output.publicPath
   //hot:true
}));
//使用热更新模块
app.use(webpackHotMiddleware(complier));

app.listen(8080,()=>{
    console.log('server is running');
});