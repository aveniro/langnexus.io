const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    plugins: [
        new CopyPlugin([
			{
                from: './src/locale',
                to: './dist/locale'
            }
        ]),
    ],
};