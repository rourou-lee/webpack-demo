
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const webpack=require('webpack');
module.exports={
    mode:'development',//默认produnction,decelopment||none,设置为development时，生成的bundle.js是不被压缩的代码
    devtool:'cheap-module-eval-source-map',//将map文件以base64字符串的形式打包到对应的脚本的最末尾
    entry:'./src/index.js',
    //entry:["@babel/polyfill", "'./src/index.js'"],
   devServer:{
        open:true,
        hot:true,//开启hot module replacement
        hotOnly:true,//即便html功能没生效，浏览器也不自动刷新
   },
    output:{
        //publicPath:'/',//打包生成的文件路径前面加一个根路径
        //publicPath:'http://cdn.com.cn',//将静态资源放在cdn上
        filename:'dist.js',//打包后的文件名，默认是main.js
        //filename:'[name].js',//对应entry的名称
        path:path.resolve(__dirname,'dist'),//打包后的文件要放在哪，后面是绝对路径，打包后生成dist文件夹
    },
    module:{
        rules:[
            {
                //处理图片结尾的文件
                test:/\.(jpeg|jpg|png|gif)$/i,
                use:{
                    loader:'file-loader',
                    //loader:'url-loader',
                    options:{
                        //placeholder 占位符
                        //name:'[name]_[hash].[ext]',//logo_xxxxhash.jpeg
                        name:'[name].[ext]',//logo.jpeg
                        //name:'[path][name].[ext]',//src/logo.jpeg,会在images文件夹下生成完整的原目录结构
                        outputPath:'images/',  //将图片文件打包生成到dist/images目录中
                        limit:10240,//如果图片小于10kb,会将文件生成base64生成到bundle.js中，大于2kb单独生成到images目录中,
                    }
                }
            },{
                test:/\.css$/i,
                use:[{
                        loader:'style-loader',
                        options:{
                            injectType:'styleTag'
                        }
                    },
                    'css-loader']              
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" , //babel与webpack的沟通媒介
                options:{
                    //转换es6语法,或者不用此配置添加.babelrc配置文件
                    // presets: [
                    //             [
                    //                 '@babel/preset-env',{
                    //                     useBuiltIns:'usage' ,//在地浏览器版本中不是加载所有的ES6语法，而是加载业务代码中用到的，减小代码体积
                    //                     "targets": {
                    //                         //表示项目在打包后运行在以下版本浏览器,比如谷歌版本大于67，浏览器对ES6语法兼容较好，不会再做转义了
                    //                         "edge": "17",
                    //                         "firefox": "60",
                    //                         "chrome": "67",
                    //                         "safari": "11.1",
                    //                     },
                    //                 }
                    //             ]
                    //         ]
                    
                }  
            }
        ]
    },
    plugins:[
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template:'src/index.html'
            }),
            new CleanWebpackPlugin()],
};