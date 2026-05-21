import adapter from '@sveltejs/adapter-static';

const base = process.env.GITHUB_ACTIONS ? '/birdIdentifier' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		}),
		paths: { base },
		prerender: {
			handleHttpError: ({ path }) => {
				if (path === '/' || !path.startsWith(base)) return;
				throw new Error(`Failed to prerender ${path}`);
			}
		}
	}
};

export default config;
