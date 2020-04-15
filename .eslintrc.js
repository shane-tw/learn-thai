module.exports = {
	root: true,

	env: {
		node: true
	},

	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],

	parserOptions: {
		parser: 'babel-eslint'
	},

	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		indent: ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'vue/html-indent': ['error', 'tab']
	},

	overrides: [
		{
			files: [
				'**/__tests__/*.js?(x)',
				'**/tests/unit/**/*.spec.js?(x)'
			],
			env: {
				mocha: true
			}
		}
	]
}
