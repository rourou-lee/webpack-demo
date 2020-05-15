const merge=require('webpack-merge');
const commonConfig=require('./webpack.common.js');
const prodConfig={
    mode:'production',//默认produnction,decelopment||none,设置为development时，生成的bundle.js是不被压缩的代码
    devtool:'cheap-module-eval-source-map',//将map文件以base64字符串的形式打包到对应的脚本的最末尾
};
module.exports=merge(commonConfig,prodConfig);