module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig
      .externals({
        'platformsh_variables': 'platformsh_variables'
      })
  })
}