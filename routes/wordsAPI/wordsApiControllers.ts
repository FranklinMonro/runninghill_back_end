import { Request, Response, NextFunction } from 'express';

import { wordsApiLogger as log } from '../../server/winstonLog';
import getWordsByPartOfSpeech from './wordsApiUtils';

const getWords = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { wordtype, pagenumber } = req.query;
    const wordsAsPerType = await getWordsByPartOfSpeech(wordtype as string, pagenumber as string);
    if (wordsAsPerType instanceof Error) {
      throw new Error('Error in getting words by type');
    }
    res.status(200).send(wordsAsPerType);
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

export default getWords;
