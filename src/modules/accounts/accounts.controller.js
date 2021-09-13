import { Account } from "./accounts.model";

// create an acccount
const createAccount = async (body) => {
  try {
    const accountObj = {
      name: body.name,
    };

    const accountResponse = await Account.query().insert(accountObj);
    if (accountResponse) {
      return accountResponse;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// update a account

const updateAccount = async (id, updateItem) => {
  const accountId = id;
  const storeObject = {
    name: updateItem.name,
    status: updateItem?.status,
  };

  try {
    const updatedResult = await Account.query()
      .patch({
        name: storeObject.name,
        status: storeObject.status,
      })
      .where("id", accountId);

    if (updatedResult) {
      return updatedResult;
    } else {
      return null;
    }
  } catch (error) {}
};

// delete account

const deleteAccount = async (id) => {
  const deletedId = id;
  try {
    const deletedAccounts = await Account.query().deleteById(deletedId);

    if (deletedAccounts) {
      return deletedAccounts;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// get an account
const getAll = async () => {
  try {
    const allAccounts = await Account.query();
    if (allAccounts) {
      return allAccounts;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const getSpecificAccount = async (id) => {
  const accountId = id;
  try {
    const specificAccount = await Account.query().findById(accountId);
    if (specificAccount) {
      return specificAccount;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
export default {
  createAccount,
  updateAccount,
  deleteAccount,
  getAll,
  getSpecificAccount,
};
