import express from 'express';
import { getSentence, getWordType, postSentence } from './sentenceControllers';

class SentenceRouter {
  public router = express.Router();

  constructor() {
    this.router.get('/wordtype', getWordType);

    this.router.post('/sentence', postSentence);

    this.router.get('/sentence', getSentence);
  }
}

export default new SentenceRouter().router;