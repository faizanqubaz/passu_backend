import { SecondaryAccount } from "./secondaryAccount.model";

// create a secondary account
const create = async (body) => {
  try {
    const secondaryAccountObject = {
      name: body.name,
    };
    const account = await SecondaryAccount.query().insert(
      secondaryAccountObject
    );
    if (account) {
      return account;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// update a secondaryy account
const update = async (id, body) => {
  try {
    let secondaryAccountId = id;
    let secondaryAccountObject = {
      name: body.name,
    };

    const account = await SecondaryAccount.query()
      .patch({
        name: secondaryAccountObject.name,
      })
      .where("id", secondaryAccountId);

    if (account) {
      return account;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
// delete a secondary accounts
const deleteSecondaryAccount = async (id) => {
  try {
    let secondaryAccountId = id;
    const account = await SecondaryAccount.query().deleteById(
      secondaryAccountId
    );
    if (account) {
      return account;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// get all secondary accounts
const getAll = async () => {
  try {
    const account = await SecondaryAccount.query();

    if (account) {
      return account;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
// get specific secondary account
const getSpecificAccount = async (id) => {
  try {
    const secondaryAccountId = id;
    const account = await SecondaryAccount.query().findById(secondaryAccountId);
    if (account) {
      return account;
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
  deleteSecondaryAccount,
  getAll,
  getSpecificAccount,
};
