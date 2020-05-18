const webpack=require('webpack');
const merge=require('webpack-merge');
const commonConfig=require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const devConfig={
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    devServer:{
            open:true,
            hot:true,//开启hot module replacement
            //hotOnly:true,//即便html功能没生效，浏览器也不自动刷新
    },
    plugins:[
            new webpack.HotModuleReplacementPlugin(),
           // new BundleAnalyzerPlugin(),
    ],
    
};
module.exports=merge(commonConfig,devConfig);