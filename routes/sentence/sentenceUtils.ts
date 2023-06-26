import { randomUUID } from 'crypto';

import { sentenceLogger as log } from '../../server/winstonLog';
import { SEQUILIZE_NEW } from '../../server/config';
import { initModels } from '../../models-view/init-models';
import createErrorMessage from '../../server/createErrorMessage';
import { WordTypes, SentenceTypes } from './sentenceInterfaces';

const { wordtype, sentence } = initModels(SEQUILIZE_NEW);

const getWordTypes = async (): Promise<WordTypes[] | Error> => {
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
    return err as Error;
  }
};

const getSentences = async (): Promise<SentenceTypes[] | Error> => {
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
    return err as Error;
  }
};

const postSentences = async (incommingSentence: string): Promise<boolean | Error> => {
  try {
    const sentences = await sentence.create({
      senteceID: randomUUID(),
      sentence: incommingSentence,
      active: true,
    }).catch((err) => {
      log.log('error', `Error in getting wordTypes, error: ${err}`);
      throw new Error('Error in getting wordTypes');
    });

    return !!sentences;
  } catch (err: any) {
    const { fileName, line } = createErrorMessage(err!);
    log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
    return err as Error;
  }
};

const deleteSentences = async (
  sentenceID: string,
  sentenceActive: boolean,
): Promise<number | Error> => {
  try {
    const sentences = await sentence.update(
      {
        active: sentenceActive,
      },
      {
        where: {
          senteceID: sentenceID,
        },
      },
    ).catch((err) => {
      log.log('error', `Error in getting wordTypes, error: ${err}`);
      throw new Error('Error in getting wordTypes');
    });
    return sentences[0] === 1 ? 204 : 400;
  } catch (err: any) {
    const { fileName, line } = createErrorMessage(err!);
    log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
    return err as Error;
  }
};

export {
  getWordTypes,
  getSentences,
  postSentences,
  deleteSentences,
};
