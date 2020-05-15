const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const webpack=require('webpack');
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'dist.js',//打包后的文件名，默认是main.js
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
                loader: "babel-loader?cacheDirectory=true" , //babel与webpack的沟通媒介
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}