import { Request, Response, NextFunction } from 'express';

import { sentenceLogger as log } from '../../server/winstonLog';
import {
  deleteSentences, getSentences, getWordTypes, postSentences,
} from './sentenceUtils';

const getWordType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const words = await getWordTypes();
    if (words instanceof Error) {
      throw new Error('Error in get word types');
    }
    res.status(200).send(words);
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

const postSentence = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { sentence } = req.params;
    const addSentence = await postSentences(sentence);
    if (addSentence instanceof Error) {
      throw new Error('Error in posting sentence');
    }
    res.status(200).send(addSentence);
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

const getSentence = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const sentences = await getSentences();
    if (sentences instanceof Error) {
      throw new Error('Error in get sentences');
    }
    res.status(200).send(sentences);
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

const deleteSentence = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { sentenceID, sentenceDelete } = req.params;
    const sentenceActive = sentenceDelete === 'true';
    const sentenceDel = await deleteSentences(sentenceID, sentenceActive);
    if (sentenceDel instanceof Error) {
      throw new Error('Error in delete sentences');
    }
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

export {
  getWordType,
  postSentence,
  getSentence,
  deleteSentence,
};
