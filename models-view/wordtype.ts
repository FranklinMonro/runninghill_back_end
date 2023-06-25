import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface wordtypeAttributes {
  typeID: string;
  wordType?: string;
}

export type wordtypeOptionalAttributes = "wordType";
export type wordtypeCreationAttributes = Optional<wordtypeAttributes, wordtypeOptionalAttributes>;

export class wordtype extends Model<wordtypeAttributes, wordtypeCreationAttributes> implements wordtypeAttributes {
  typeID!: string;
  wordType?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof wordtype {
    return sequelize.define('wordtype', {
    typeID: {
      type: DataTypes.UUID,
      allowNull: false
    },
    wordType: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'wordtypes',
    schema: 'public',
    timestamps: false
  }) as typeof wordtype;
  }
}
