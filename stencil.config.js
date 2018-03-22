const sass = require('@stencil/sass');

exports.config = {
  namespace: 'ionic-site-components',
  generateDistribution: true,
  bundles: [
    { components: ['ionic-button'] },
    { components: ['ionic-newsletter-signup'] }
  ],
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      dir: 'dist',
      baseUrl: '/stencil',
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
