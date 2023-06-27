import { json, urlencoded } from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import { appLogger as log, errorHandlerLogger as errorLog } from './winstonLog';
import createErrorMessage from './createErrorMessage';
import swaggerConfig from '../swagger/swaggerConfig';

import SentenceRouter from '../routes/sentence/sentenceRoutes';
import WordsApiRouter from '../routes/wordsAPI/worsApiRoutes';

class App {
  public httpServer = express();

  constructor() {
    this.httpServer.use(json({ limit: '500mb' }));

    this.httpServer.use(urlencoded({ extended: true, limit: '500mb' }));

    this.httpServer.use((req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Authorization, X-CSRFToken',
      );
      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, OPTIONS, DELETE');
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });

    this.httpServer.set('trust proxy', true);

    this.httpServer.get('/', (req: Request, res: Response) => {
      console.log('Welcome to Runninghill API');
      res.send('Welcome to Runninghill API');
    });

    // this.httpServer.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

    this.httpServer.use('/runninghillapi-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

    this.httpServer.use('/runninghillapi/senttenceroutes', SentenceRouter);

    this.httpServer.use('/runninghillapi/wordsapi', WordsApiRouter);

    this.httpServer.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.log(`error in url ${req.originalUrl} - error: ${err}`);
      log.error(`error in url ${req.originalUrl} - error: ${err.message}`);
      const errormessage = createErrorMessage(err);
      errorLog.log('error', `Error in File: ${errormessage.fileName} on line: ${errormessage.line}, error: ${err}`);
      const statusCode = errormessage.statusCode || 403; // <- Look here
      res.status(statusCode).json({
        detail: err.message,
      });
      next();
    });

    process.once('uncaughtException', (err: Error) => {
      console.log(err.name, err.message);
      console.log('UNCAUGHT EXCEPTION!  Shutting down...');
      log.log('error', `uncaughtException - Error name: ${err.name}, Error message: ${err.message}, UNCAUGHT EXCEPTION!  Shutting down...`);
      process.exit(1);
    });

    process.once('unhandledRejection', (reason: Error) => {
      console.log(reason.name, reason.message);
      console.log('UNHANDLED REJECTION! 💥 Shutting down...');
      log.log('error', `uncaughtException - Reason name: ${reason.name}, Reason message: ${reason.message}, UNHANDLED REJECTION!  Shutting down...`);
      process.exit(1);
    });
  }
}

export default new App().httpServer;
