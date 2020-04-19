import { db } from './db';
import { serverRoutes } from './server-routes';
import * as jsonServer from 'json-server';
import { json } from 'body-parser';

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults({ bodyParser: true });

// To handle POST, PUT, and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(json());

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
serverRoutes(server);

// Use default router
server.use(router);
server.listen(3001);
console.log('JSON Server is running on port:3001');