interface WordsApiData {
  query?: WordsApiDataQuery;
  results?:WordsApiDataResults;
}

interface WordsApiDataQuery {
  limit?: string;
  page?: string;
}

interface WordsApiDataResults {
  total?: number;
  data?: string[];
}

interface WordsApiDataReturn {
  page?: string;
  results?:WordsApiDataResults;
}

export {
  WordsApiData,
  WordsApiDataReturn,
};
