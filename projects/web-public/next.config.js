const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@boni/design-system',
  '@boni/utils'
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
