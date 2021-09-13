import baseModel from "../../utils/baseModel";

export class SecondaryAccount extends baseModel {
  static get tableName() {
    return "secondaryAccounts";
  }
  static get idColumn() {
    return "id";
  }
}
