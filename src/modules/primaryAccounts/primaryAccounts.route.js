import express from "express";
import primaryAccountController from "./primaryAccounts.controller";

const router = express.Router();

// create a primary account
router.post("/create", async (req, res) => {
  let primaryAccountBody = req.body;
  try {
    const primaryAccount = await primaryAccountController.create(
      primaryAccountBody
    );
    if (primaryAccount) {
      res.status(501).json({
        message: "sucessfully created the Primary account",
        data: primaryAccount,
      });
    } else {
      res.status(400).send("unable to create a primary account");
    }
  } catch (error) {
    console.log(error);
  }
});

// update a primary accounts
router.put("/update/:id", async (req, res) => {
  let primaryAccountId = req.params.id;
  let requestBody = req.body;
  try {
    const primaryAccount = await primaryAccountController.update(
      primaryAccountId,
      requestBody
    );
    if (primaryAccount) {
      res.status(200).json({
        message: "primary accounts sucessfullyy updated",
        data: primaryAccount,
      });
    } else {
      res.status(400).json({
        message: "unable to update primary account",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// delete a Primary accounts

router.delete("/delete/:id", async (req, res) => {
  let primaryAccountId = req.params.id;
  try {
    const primaryAccount = await primaryAccountController.deletePrimaryAccount(
      primaryAccountId
    );
    if (primaryAccount) {
      res.status(200).json({
        message: "primary account sucessfully deleted",
        data: primaryAccount,
      });
    } else {
      res.status(400).send("unable to delete a primary account");
    }
  } catch (error) {
    console.log(error);
  }
});

// delete a Primary account
router.get("/getall", async (req, res) => {
  try {
    const primaryAccount = await primaryAccountController.getAll();

    if (primaryAccount) {
      res.status(200).json({
        message: "primary account sucessfully deleted",
        data: primaryAccount,
      });
    } else {
      res.status(400).send("unable to get a primary account");
    }
  } catch (error) {
    console.log(error);
  }
});

// get the specific specific Primary Accounts
router.get('/get/:id',async(req,res)=>{
  let primaryAccountId=req.params.id;
  try {
    const primaryAccount=await primaryAccountController.getSpecific(primaryAccountId);
    if (primaryAccount) {
      res.status(200).json({
        message: "primary account sucessfully fetched",
        data: primaryAccount,
      });
    } else {
      res.status(400).send("unable to get a primary account");
    }
  } catch (error) {
    
  }
})
export default router;
