exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  bundles: [
    { components: ['ionic-button'] },
    { components: ['ionic-newsletter-signup'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
