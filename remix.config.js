
const { flatRoutes } = require('remix-flat-routes')
/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  // browserBuildDirectory: 'public/build',
  // publicPath: '/build/',
  // serverBuildDirectory: 'build',
  // devServerPort: 8002,
  future: {
    v2_routeConvention: true,
    unstable_cssModules: true,
    unstable_postcss: true,
  },
  ignoredRouteFiles: ["**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  routes: async defineRoutes => {
    return flatRoutes('routes', defineRoutes)
  },
};
