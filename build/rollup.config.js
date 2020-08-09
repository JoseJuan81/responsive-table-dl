import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support

const vuePluginOptions = {
	css: true,
	compileTemplate: true,
};

if (process.env.SSR) {
	vuePluginOptions.template = { optimizeSSR: true };
}

export default {
	input: 'src/index.js', // Path relative to package.json
	output: {
		name: 'ResponsiveTableDl',
		exports: 'named',
	},
	plugins: [
		commonjs(),
		vue(vuePluginOptions),
		buble(), // Transpile to ES5
	],
};
