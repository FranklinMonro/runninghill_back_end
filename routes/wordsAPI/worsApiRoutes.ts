import express from 'express';

import getWords from './wordsApiControllers';

class WordsApiRouter {
    public router = express.Router();

    constructor() {
        this.router.get('/:wordtype', getWords);
    }
}

export default new WordsApiRouter().router;