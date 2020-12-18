module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV)
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-typescript',
    ['@babel/preset-react'],
  ]
  return {
    presets,
  }
}
