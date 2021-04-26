module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'airbnb-base',
		'plugin:prettier/recommended' // 添加 prettier 插件
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'import/no-extraneous-dependencies': [
			2,
			{
				devDependencies: true,
				peerDependencies: true
				// optionalDependencies: true,
				// bundledDependencies: true
			}
		],
		'import/no-unresolved': [
			2,
			{
				ignore: ['^@/'] // @ 是设置的路径别名
			}
		]
	}
}
