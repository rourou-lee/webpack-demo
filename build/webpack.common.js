const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const webpack=require('webpack');

module.exports={
    //将第三方库和业务逻辑代码分离打包
    entry:{
        main:'./src/index.js',
        //lodash:'./src/lodash.js'
    },
    output:{
        filename:'[name].js',//打包后的文件名，默认是main.js
        path:path.resolve(__dirname,'../dist'),//打包后的文件要放在哪，后面是绝对路径，打包后生成dist文件夹
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
                loader: "babel-loader?cacheDirectory=true" , //babel与webpack的沟通媒介
            }
        ]
    },
    plugins:[
        
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        /**clean-webpack-plugin默认为build是根目录，所以他只能清除根目录下面的目录，我不能清除根目录之外的文件夹，
         * 所以../dist会报错，具体配置参考https://github.com/johnagan/clean-webpack-plugin,
         * 如果output.path配置了绝对路径，此处不需要配置，无需传参*/
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        })
    ],
    optimization:{
        /**
     * 因为开发环境没有Tree Shaking功能，开发环境需要如此配置，生产环境就不需要这项配置
     * */
        usedExports:true,
        //具体配置参考SplitChunksPlugin
        splitChunks:{
            chunks: 'all',  //代码分割时只对异步代码分割，设置成all，同时配置vendors，同步异步都分割
        }
    }
}