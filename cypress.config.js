import { defineConfig } from 'cypress';

export default defineConfig({
	defaultCommandTimeout: 10000,
	e2e: {
		viewportHeight: 5000,
		viewportWidth: 1200,
	},
});
