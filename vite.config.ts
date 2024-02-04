import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		proxy: {
			"/wolfram": {
			target: "https://api.wolframalpha.com",
			changeOrigin: true,
			secure: false,
			rewrite: (path) => path.replace(/^\/wolfram/, ""),
			},
		},
	},
	plugins: [sveltekit()]
});
