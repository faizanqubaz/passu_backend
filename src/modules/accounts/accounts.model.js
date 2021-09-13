import baseModel from "../../utils/baseModel";
import { PrimaryAccount } from "../primaryAccounts/primaryAccounts.model";
import { SecondaryAccount } from "../secondaryAccounts/secondaryAccount.model";
import { Model } from "objection";
export class Account extends baseModel {
  static get tableName() {
    return "accounts";
  }
  static get idColumn() {
    return "id";
  }

 
}
