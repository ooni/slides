const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    })
    config.module.rules.push({
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    })
    config.module.rules.push({
      test: /\.mp4$/,
      loader: "file-loader?mimetype=video/mp4"
    })
    config.module.rules.push({
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      //include: path.join(__dirname, "assets")
    })
    config.module.rules.push({
      test: /\.gif$/,
      loader: "url-loader?mimetype=image/gif",
      //include: path.join(__dirname, "assets")
    })
    config.module.rules.push({
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
      //include: path.join(__dirname, "assets")
    })
    return config
  }
})
