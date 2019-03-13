module.exports = api => {
  api.chainWebpack(webpackConfig => {
    webpackConfig.externals({
      'platformsh_variables': 'platformsh_variables'
    })
  }
};
