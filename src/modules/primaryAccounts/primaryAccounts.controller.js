import { PrimaryAccount } from "./primaryAccounts.model";

// create a primary account
const create = async (body) => {
  try {
    const primaryAccountObject = {
      name: body.name,
      status: "user",
    };
    const response = await PrimaryAccount.query().insert(primaryAccountObject);
    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// update a primary accounts

const update = async (id, body) => {
  try {
    const updateId = id;
    const requestObject = {
      name: body.name,
      status: body.status,
    };
    const updatedPrimaryAccount = await PrimaryAccount.query()
      .patch({
        name: requestObject.name,
        status: requestObject?.status,
      })
      .where("id", updateId);

    if (updatedPrimaryAccount) {
      return updatedPrimaryAccount;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

// delete a primaryAccount

const deletePrimaryAccount = async (id) => {
  try {
    const primaryAccountId = id;

    const deletedPrimaryAccount = await PrimaryAccount.query().deleteById(
      primaryAccountId
    );
    if (deletePrimaryAccount) {
      return deletePrimaryAccount;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  try {
    const getPrimaryAccount = await PrimaryAccount.query().eager(
      "[account,secondary]"
    );

    if (getPrimaryAccount) {
      return getPrimaryAccount;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const getSpecific = async (id) => {
  let primaryAccountId = id;
  try {
    const getSpecificAccount = -(await PrimaryAccount.query().findById(
      primaryAccountId
    ));
    if (getSpecificAccount) {
      return getSpecificAccount;
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
  deletePrimaryAccount,
  getAll,
  getSpecific,
};
