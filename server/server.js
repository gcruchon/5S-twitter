import Express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';

// Webpack Requirements
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webPackConfig from '../webpack.config';

import serverConfig from './config';

// Initialize the Express App
const app = new Express();

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webPackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webPackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../dist/client')));
// app.use('/api', posts);

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`5S Twitter is running on port: ${serverConfig.port}!`); // eslint-disable-line
  }
});

export default app;
