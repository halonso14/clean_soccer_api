import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Json from 'koa-json';
import Router from 'koa-router';
import type { ServerConfig } from './loaders/types';
import ApiRouter from './router';

/**
 * Creates the application instance.
 * This cares about only application logic not external environments such as config, logging, server setup.
 *
 * @returns App creator
 */
const App = (serverConfig: ServerConfig) => {
  const app = new Koa();
  const router = new Router();

  // middlewares of app
  app.use(bodyParser());
  app.use(Json());

  // error handling
  app.on('error', (error: Error) => {
    console.error('Error - ', error)
  });

  // router setup
  router.use(serverConfig.prefix, new ApiRouter().router.routes());
  app.use(router.routes()).use(router.allowedMethods());

  return app;
};

export default App;
