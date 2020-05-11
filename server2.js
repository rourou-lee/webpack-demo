//使用webpack dev server
const webpackDevServer=require('webpack-dev-server');
const webpack=require('webpack');
const config=require('./webpack.config.js');
const option={
    contentBase:'./dist',
    hot:true,
    host:'localhost'
};
/**  
 * webpack-dev-server package 中具有一个叫做addDevServerEntrypoints 的方法
 * 想要启用 HMR，使用该方法添加 HMR 入口起点。
*/
webpackDevServer.addDevServerEntrypoints(config,option);
const compiler=webpack(config);
const server=new webpackDevServer(compiler,option);
server.listen(5000,'localhost',()=>{
    console.log('dev server listening on port 5000');
});