import baseModel from "../../utils/baseModel";

export class TransactionItem extends baseModel {
  static get tableName() {
    return "transactionItems";
  }
  static get idColumn() {
    return "id";
  }
}
