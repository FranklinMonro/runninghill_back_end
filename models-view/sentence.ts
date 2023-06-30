import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sentenceAttributes {
  senteceID: string;
  sentence?: string;
  active?: boolean;
}

export type sentenceOptionalAttributes = "sentence" | "active";
export type sentenceCreationAttributes = Optional<sentenceAttributes, sentenceOptionalAttributes>;

export class sentence extends Model<sentenceAttributes, sentenceCreationAttributes> implements sentenceAttributes {
  senteceID!: string;
  sentence?: string;
  active?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof sentence {
    return sequelize.define('sentence', {
    senteceID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    sentence: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'sentences',
    schema: 'public',
    timestamps: false
  }) as typeof sentence;
  }
}
