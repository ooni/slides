const glob = require('glob')

const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  exportPathMap: () => {
    const pm = {}
    glob.sync('pages/*/*/index.js', { ignore: 'pages/_document.js' }).forEach(s => {
      const path = s.split(/(pages|\.)/)[2].replace(/\/index$/, '')
      pm[path] = { page: path }
    })
    return pm
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(png|gif|jpg|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]'
        }
      }
    })
    config.module.rules.push({
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    })
    config.module.rules.push({
      test: /\.mp4$/,
      loader: "file-loader?mimetype=video/mp4"
    })
    return config
  }
})
