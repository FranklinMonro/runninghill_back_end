import { Request, Response, NextFunction } from 'express';

import { sentenceLogger as log } from '../../server/winstonLog';

const getWordType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

    } catch (err) {
      log.log('error', `URL ${req.baseUrl}, error: ${err}`);
      next(err);
    }
};

const postSentence = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

    } catch (err) {
      log.log('error', `URL ${req.baseUrl}, error: ${err}`);
      next(err);
    }
};

const getSentence = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

    } catch (err) {
      log.log('error', `URL ${req.baseUrl}, error: ${err}`);
      next(err);
    }
};

export {
    getWordType,
    postSentence,
    getSentence
};