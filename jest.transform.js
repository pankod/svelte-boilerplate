const babelConfig = require('./babel.config.js')

module.exports = require('babel-jest').createTransformer(babelConfig)