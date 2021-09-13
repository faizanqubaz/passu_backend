import baseModel from "../../utils/baseModel";
import { SecondaryAccount } from "../secondaryAccounts/secondaryAccount.model";

export class PrimaryAccount extends baseModel {
  static get tableName() {
    return "primaryAccounts";
  }
  static get idColumn() {
    return "id";
  }

  static get relationMappings() {
    return {
      secondary: {
        relation: baseModel.BelongsToOneRelation,
        modelClass: SecondaryAccount,
        join: {
          from: "primaryAccounts.id",
          to: "secondaryAccounts.id",
        },
      },
      account: {
        relation: baseModel.ManyToManyRelation,
        modelClass: SecondaryAccount,
        join: {
          from: "primaryAccounts.id",
          through: {
            from: "accounts.primaryAccountId",
            to: "accounts.secondaryAccountId",
          },
          to: "secondaryAccounts.id",
        },
      },
    };
  }
}
