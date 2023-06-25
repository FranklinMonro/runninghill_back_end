import { sentenceLogger as log } from '../../server/winstonLog';
import { SEQUILIZE_NEW } from '../../server/config';
import { initModels } from '../../models-view/init-models';
import createErrorMessage from '../../server/createErrorMessage';
import { WordTypes, SentenceTypes } from './sentenceInterfaces';

const { wordtype, sentence  } = initModels(SEQUILIZE_NEW);

const getWordTypes = async (): Promise<WordTypes[]> => {
    try {
        const wordTypes = await wordtype.findAll({
            raw: true,
        }).catch((err) => {
            log.log('error', `Error in getting wordTypes, error: ${err}`);
            throw new Error('Error in getting wordTypes');
        });

        return wordTypes!;
    } catch (err: any) {
        const { fileName, line } = createErrorMessage(err!);
        log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
        return err;
    }
}

const getSentence = async (): Promise<SentenceTypes[]> => {
    try {
        const sentences = await sentence.findAll({
            where: {
                active: true,
            },
            raw: true,
        }).catch((err) => {
            log.log('error', `Error in getting wordTypes, error: ${err}`);
            throw new Error('Error in getting wordTypes');
        });

        return sentences!;
    } catch (err: any) {
        const { fileName, line } = createErrorMessage(err!);
        log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
        return err;
    }
}

const postSentence = async (): Promise<SentenceTypes[]> => {
    try {
        const sentences = await sentence.findAll({
            where: {
                active: true,
            },
            raw: true,
        }).catch((err) => {
            log.log('error', `Error in getting wordTypes, error: ${err}`);
            throw new Error('Error in getting wordTypes');
        });

        return sentences!;
    } catch (err: any) {
        const { fileName, line } = createErrorMessage(err!);
        log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
        return err;
    }
}

const deleteSentence = async (): Promise<SentenceTypes[]> => {
    try {
        const sentences = await sentence.findAll({
            where: {
                active: true,
            },
            raw: true,
        }).catch((err) => {
            log.log('error', `Error in getting wordTypes, error: ${err}`);
            throw new Error('Error in getting wordTypes');
        });

        return sentences!;
    } catch (err: any) {
        const { fileName, line } = createErrorMessage(err!);
        log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
        return err;
    }
}

export {
    getWordTypes,
    getSentence,
    postSentence,
    deleteSentence,
}

