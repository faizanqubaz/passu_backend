import baseModel from "../../utils/baseModel";

export class Transaction extends baseModel {
  static get tableName() {
    return "transactions";
  }
  static get idColumn() {
    return "id";
  }
}
