import Router from 'koa-router';
import { getPlayers } from '../controllers';
import { makeKoaCallback } from '../callback';

/**
 * Router for APIs.
 */
class ApiRouter {
  router: Router;

  constructor() {
    this.router = new Router();

    this.router.get('/player/:id', makeKoaCallback(getPlayers));
  }
}

export default ApiRouter;
