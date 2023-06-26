import express from 'express';
import {
  deleteSentence, getSentence, getWordType, postSentence,
} from './sentenceControllers';

class SentenceRouter {
  public router = express.Router();

  constructor() {
    this.router.get('/wordtype', getWordType);

    this.router.post('/sentence/:sentence', postSentence);

    this.router.get('/sentence', getSentence);

    this.router.delete('/sentence/:sentenceID/:sentenceDelete', deleteSentence);
  }
}

export default new SentenceRouter().router;
