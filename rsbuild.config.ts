import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';

export default defineConfig({
    source: {
        entry: ['./src/index.ts'],
    },
    plugins: [pluginSvelte()],
    output: {
		injectStyles: true,
		inlineScripts: true,
	
        overrideBrowserslist: ['chrome < 88'], // should transform :where, you can also use 'chrome > 80'
    },
    performance: {
		printFileSize: false,
		chunkSplit: {
			strategy: 'all-in-one'
		}
	},
});