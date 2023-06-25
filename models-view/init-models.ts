import type { Sequelize } from "sequelize";
import { sentence as _sentence } from "./sentence";
import type { sentenceAttributes, sentenceCreationAttributes } from "./sentence";
import { wordtype as _wordtype } from "./wordtype";
import type { wordtypeAttributes, wordtypeCreationAttributes } from "./wordtype";

export {
  _sentence as sentence,
  _wordtype as wordtype,
};

export type {
  sentenceAttributes,
  sentenceCreationAttributes,
  wordtypeAttributes,
  wordtypeCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const sentence = _sentence.initModel(sequelize);
  const wordtype = _wordtype.initModel(sequelize);


  return {
    sentence: sentence,
    wordtype: wordtype,
  };
}
