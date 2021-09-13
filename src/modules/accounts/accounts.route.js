import { compareSync } from "bcryptjs";
import express from "express";
import accountsController from "./accounts.controller";
import accountController from "./accounts.controller";
const router = express.Router();

// create account
router.post("/create", async (req, res) => {
  let accountBody = req.body;
  try {
    const accounts = await accountController.createAccount(accountBody);
    if (accounts) {
      res.status(501).json({
        message: "account added successfully",
      });
    } else {
      res.status(401).json({
        message: "unable to add account",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// update a account
router.put("/update/:id", async (req, res) => {
  let accountId = req.params.id;
  let updateBody = req.body;
  try {
    const accounts = await accountsController.updateAccount(
      accountId,
      updateBody
    );
    if (accounts) {
      res.json({
        message: "account update sucessfully",
        data: accounts,
      });
    } else {
      console.log("unable to update this account");
    }
  } catch (error) {
    console.log(error);
  }
});

// delete a account
router.delete("/delete/:id", async (req, res) => {
  let accountId = req.params.id;
  try {
    let accounts = await accountsController.deleteAccount(accountId);
    if (accounts) {
      res.status(200).json({
        message: "sucessfully deleted account",
        data: accounts,
      });
    } else {
      res.status(400).send("unable to delete  this account");
    }
  } catch (error) {
    console.log(error);
  }
});

// get accounts
router.get("/get", async (req, res) => {
  try {
    const accounts = await accountsController.getAll();
    if (accounts) {
      res.status(200).json({
        message: "sucessfully fetch all accounts",
        data: accounts,
      });
    } else {
      res.status(404).send("unable to fetch accounts");
    }
  } catch (error) {
    console.log(error);
  }
});

// getacccount by id
router.get("/get/:id", async (req, res) => {
  let accountId = req.params.id;
  try {
    const accounts = await accountsController.getSpecificAccount(accountId);
    if (accounts) {
      res.status(200).json({
        message: "successfully get specific account",
        data: accounts,
      });
    } else {
      res.status(400).send("cannot get the specific account");
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
