module.exports = {
	presets: [
		['@babel/preset-env', {
			modules: 'commonjs',
		}],
	],
	plugins: [
		'add-module-exports',
		"inline-dotenv"
	],
};
