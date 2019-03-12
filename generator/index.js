module.exports = (api, opts, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'platformsh_variables': '^1.0.5'
    },
    scripts: {
        'buildenvvar': 'platform-var dist'
    }
  })
  
  api.render({
    './.platform/services.yaml': './template/.platform/services.yaml',
    './.platform/routes.yaml': './template/.platform/routes.yaml',
    './.platform.app.yaml': './template/.platform.app.yaml'
  })

  configureWebpack: webpackConfig => {
    if (process.env.NODE_ENV === 'production') {
      webpackConfig.externals({
        'platformsh_variables': 'platformsh_variables'
      })
    }
  }
}
