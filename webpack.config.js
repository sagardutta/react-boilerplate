module.exports ={
  entry: './jsx/app.jsx',
  output: {
    path: __dirname+'/js/',
    filename: 'bundle.js'
  },
  loaders: [
    {
      test:/\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['babel']
    }
  ]
}
