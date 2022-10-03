'use strict';

/* eslint-env node */

const path = require( 'path' );
const webpack = require( 'webpack' );
const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const TerserWebpackPlugin = require( 'terser-webpack-plugin' );

module.exports = {
    devtool: 'source-map',
    performance: { hints: false },
    mode: 'production',
    entry: path.resolve( __dirname, 'src', 'appckeditor.js' ),

    output: {
        library: 'Editor',
        path: path.resolve( __dirname, 'build' ),
        filename: 'appckeditor.js',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },

    optimization: {
        minimizer: [
            new TerserWebpackPlugin( {
                sourceMap: true,
                terserOptions: {
                    output: {
                        // Preserve CKEditor 5 license comments.
                        comments: /^!/
                    }
                },
                extractComments: false
            } )
        ]
    },

    plugins: [
        new CKEditorWebpackPlugin( {
            language: 'fr',
            additionalLanguages: [
                'de',
                'en',
                'es',
                'fr',
                'it',
                'nl',
                'pl',
                'pt'
            ]
        } ),
        new webpack.BannerPlugin( {
            banner: bundler.getLicenseBanner(),
            raw: true
        } )
    ],

    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [ 'raw-loader' ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            attributes: {
                                'data-cke': true
                            }
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: styles.getPostCssConfig( {
                                themeImporter: {
                                    themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                                },
                                minify: true
                            } )
                        }
                    },
                ]
            }
        ]
    }
};
