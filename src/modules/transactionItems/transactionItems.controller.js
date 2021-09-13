import { TransactionItem } from "./transactionItems.model";

// create a transaction_items
const create = async (body) => {
  try {
    let transactionItemObject = {
      type: body.type,
      narration: body.narration,
      amount: body.amount,
      status: body.status,
    };
    const responseTransactionItem = await TransactionItem.query().insert(
      transactionItemObject
    );
    if (responseTransactionItem) {
      return responseTransactionItem;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// update a transactionItems

const update = async (id, body) => {
  try {
    let transationItemId = id;
    const transactionItemObject = {
      type: body.type,
      narration: body.narration,
      amount: body.amount,
      status: body.status,
    };
    const responseTransactionItem = await TransactionItem.query()
      .patch({
        type: transactionItemObject.type,
        narration: transactionItemObject.narration,
        amount: transactionItemObject.amount,
        status: transactionItemObject.status,
      })
      .where("id", transationItemId);
    if (responseTransactionItem) {
      return responseTransactionItem;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// delete a transaction

const deleteTransactionItem = async (id) => {
  try {
    let transactionItemId = id;

    const responseTransactionItem = await TransactionItem.query().deleteById(
      transactionItemId
    );
    if (responseTransactionItem) {
      return responseTransactionItem;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
// get ALL transactionItems
const getAll = async () => {
  try {
    const responseTransactionItem = await TransactionItem.query();
    if (responseTransactionItem) {
      return responseTransactionItem;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const getSpecificTransactionItem = async (id) => {
  try {
    let transactionItemId=id;
    const responseTransactionItem = await TransactionItem.query().findById(transactionItemId)
    if (responseTransactionItem) {
      return responseTransactionItem;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export default {
  create,
  update,
  deleteTransactionItem,
  getAll,
  getSpecificTransactionItem
};
