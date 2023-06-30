interface WordTypes {
  typeID: string;
  wordType?: string;
}

interface SentenceTypes {
  senteceID: string;
  sentence?: string;
}

interface SencteceReturns {
  total: number;
  result: SentenceTypes[];
}

export {
  WordTypes,
  SencteceReturns,
};
