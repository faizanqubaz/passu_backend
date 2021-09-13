import { Transaction } from "./transactions.model";

const create = async (body) => {
  try {
    const transactionObject = {
      narration: body.narration,
      date: body.date,
      total: body.total,
    };
    const responseTransaction = await Transaction.query().insert(
      transactionObject
    );
    if (responseTransaction) {
      return responseTransaction;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// update a transaction items

const update = async (id, body) => {
  try {
    const transactionId = id;
    const transactionObject = {
      narration: body.narration,
      date: body.date,
      total: body.total,
    };
    const responseTransaction = await Transaction.query()
      .patch({
        narration: transactionObject.narration,
        date: transactionObject.date,
        total: transactionObject.total,
      })
      .where("id", transactionId);
    if (responseTransaction) {
      return responseTransaction;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// delete a transaction
const deleteTransaction = async () => {
  try {
    const transactionId = id;

    const responseTransaction = await Transaction.query().deleteById(
      transactionId
    );
    if (responseTransaction) {
      return responseTransaction;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  try {
    const responseTransaction = await Transaction.query();
    if (responseTransaction) {
      return responseTransaction;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
// get a specific transactionb
const getSpecificTransaction = async (id) => {
  try {
    const transactionId = id;
    const responseTransaction = await Transaction.query().findById(
      transactionId
    );
    if (responseTransaction) {
      return responseTransaction;
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
  deleteTransaction,
  getAll,
  getSpecificTransaction,
};
