import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';

const banner = `// lski-fetch-json ${pkg.version}`;

export default {
	input: 'src/index.js',
	plugins: [del({ targets: 'dist/*' })],
	output: [
		{
			dir: 'dist/es',
			format: 'es',
			exports: 'named',
			sourcemap: true,
			banner,
			preserveModules: true,
			preserveModulesRoot: 'src'
		},
		{
			file: pkg.browser,
			format: 'iife',
			name: 'lskiFetch',
			plugins: [terser()],
			sourcemap: true,
			banner,
		},
		{
			file: pkg.main,
			format: 'cjs',
			exports: 'named',
			plugins: [terser()],
			sourcemap: true,
			banner,
		},
	],
};

// umd and es, maybe a dev build?
