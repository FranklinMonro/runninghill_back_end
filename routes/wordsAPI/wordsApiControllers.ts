import { Request, Response, NextFunction } from 'express';

import { wordsApiLogger as log } from '../../server/winstonLog';

const getWords = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

    } catch (err) {
        log.log('error', `URL ${req.baseUrl}, error: ${err}`);
        next(err);
    }
};

export default getWords;