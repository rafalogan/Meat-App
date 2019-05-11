import * as jsonServer from 'json-server';
import {Express} from 'express';

import * as fs from 'fs';
import * as https from 'https';

import { handleAuthentication } from './api/auth';
import { handleAuthorization } from './api/authz';

const server: Express = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem'),
};

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// middleware para login
server.post('/login', handleAuthentication);
server.use('/orders', handleAuthorization);

// Use default router
server.use(router);
https.createServer(options, server)
  .listen(3001, () => {
  console.log('JSON Server is running on https://localhost:3001')
});
