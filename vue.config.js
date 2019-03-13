module.exports = {
  configureWebpack: config => {
    config.externals = {
       ...config.externals,
      platformsh_variables: 'platformsh_variables'
    }
  }
}