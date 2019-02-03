const config = require('config')

module.exports = {
	loading: {
		color: 'orange'
	},
	modules: ['@nuxtjs/axios', 'nuxt-leaflet', 'nuxt-svg'],

	axios: {
		retry: { retries: 3 }
	},
	build: {
		stats: 'errors-only'
	},
	srcDir: 'src/app/statistics/',

	env: {
		baseUrl: `http://${config.general.host}:${config.general.port}/`
	}
}