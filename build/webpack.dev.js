const webpack=require('webpack');
const merge=require('webpack-merge');
const commonConfig=require('./webpack.common.js');
const devConfig={
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    devServer:{
            open:true,
            hot:true,//开启hot module replacement
            //hotOnly:true,//即便html功能没生效，浏览器也不自动刷新
    },
    plugins:[
            new webpack.HotModuleReplacementPlugin()
    ],
    /**
     * 因为开发环境没有Tree Shaking功能，开发环境需要如此配置，生产环境就不需要这项配置
     * */
    optimization:{
        //只打包使用的模块，
       usedExports:true 
    }
};
module.exports=merge(commonConfig,devConfig);