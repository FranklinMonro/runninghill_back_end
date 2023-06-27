import request from 'axios';

import { wordsApiLogger as log } from '../../server/winstonLog';
import createErrorMessage from '../../server/createErrorMessage';
import { WORDS_API_CONFIG } from '../../server/config';
import { WordsApiData, WordsApiDataReturn } from './wordsApiInterfaces';

const getWordsByPartOfSpeech = async (
  partOfSpeech: string,
  pageNumber: string,
): Promise<WordsApiDataReturn | Error> => {
  try {
    const { hostname, apiKey } = WORDS_API_CONFIG;
    const options = {
      method: 'GET',
      url: 'https://wordsapiv1.p.rapidapi.com/words/',
      params: {
        partofspeech: partOfSpeech,
        limit: '100',
        page: pageNumber,
      },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': hostname,
      },
    };
    const response = await request(options);
    const { data } = response;
    const { results } = data as WordsApiData;
    return {
      page: pageNumber,
      results,
    };
  } catch (err: any) {
    const { fileName, line } = createErrorMessage(err!);
    log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
    return err as Error;
  }
};

export default getWordsByPartOfSpeech;
