/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: {
		main: './src/main.tsx'
	},
	builtins: {
		html: [
			{
				template: './index.html'
			}
		]
	},
	devServer: {
		hot: true,
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				changeOrigin: true,
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: 'asset'
			},
			{
				test: /\.s[ac]ss$/,
				use: ['sass-loader'],
				type: 'css',
			},
			{
				test: /.less$/,
				use: ['less-loader'],
				type: 'css',
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: {
									// tailwindcss: {},
								},
							},
						},
					},
				],
				type: 'css',
			},
			{
				test: /\.js$/,
				type: 'jsx',
			},
			{
				test: /\.ts$/,
				type: 'tsx',
			},
			

		]
	}
};
