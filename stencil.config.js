exports.config = {
  namespace: 'ionic-site-components',
  generateDistribution: true,
  bundles: [
    { components: ['ionic-button'] },
    { components: ['ionic-newsletter-signup'] }
  ],
  publicPath: 'stencil'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
