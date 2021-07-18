const path = require('path')

module.exports = function override(config, env) {
  const alias = {
    '@src': path.resolve(process.cwd(), 'src'),
    '@base': path.resolve(
      process.cwd(),
      'src',
      'components',
      'packages',
      'base'
    ),
    '@helpers': path.resolve(
      process.cwd(),
      'src',
      'components',
      'packages',
      'core',
      'helpers'
    ),
  }

  config.resolve.alias = alias

  return config
}
