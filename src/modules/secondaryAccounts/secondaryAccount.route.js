import express from "express";
import secondaryAccountController from "./secondaryAccounts.controller";
const router = express.Router();
// create a secondary account
router.post("/create", async (req, res) => {
  console.log("hiiii");
  let secondaryAccountBody = req.body;
  try {
    let secondaryAccount = await secondaryAccountController.create(
      secondaryAccountBody
    );
    if (secondaryAccountBody) {
      res.status(501).json({
        message: "secondary account sucessfully created",
        data: secondaryAccount,
      });
    } else {
      res.status(400).json({
        message: "secondary account cannot  created",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
// update a secondary account
router.put("/update/:id", async (req, res) => {
  let secondaryAccountId = req.params.id;
  let secondaryAccountBody = req.body;
  try {
    const secondaryAccount = await secondaryAccountController.update(
      secondaryAccountId,
      secondaryAccountBody
    );
    if (secondaryAccount) {
      res.status(200).json({
        message: "secondary account sucessfully updated ",
        data: secondaryAccount,
      });
    } else {
      res
        .status(401)
        .send("unable to update a secondary account through this Id");
    }
  } catch (error) {
    console.log(error);
  }
});
// delete a secondary accounts
router.delete("/delete/:id", async (req, res) => {
  let secondaryAccountId = req.params.id;
  try {
    const secondaryAccount = await secondaryAccountController.deleteSecondaryAccount(
      secondaryAccountId
    );
    if (secondaryAccount) {
      res.status(200).json({
        message: "secondary account sucesssfully deleted",
        data: secondaryAccount,
      });
    } else {
      res.status(401).json({
        message: "secondary account  cannot deleted with this Id",
      });
    }
  } catch (error) {}
});

// // get all secondary accounts
router.get("/get", async (req, res) => {
  try {
    const secondaryAccount = await secondaryAccountController.getAll();
    if (secondaryAccount) {
      res.status(200).json({
        message: "secondary account sucesssfully fetched",
        data: secondaryAccount,
      });
    } else {
      res.status(401).json({
        message: "secondary account  cannot fetched ",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// // get specific secondary accounts
router.get("/get/:id", async(req, res) => {
  let secondaryAccountId=req.params.id;
  try {
    const secondaryAccount=await secondaryAccountController.getSpecificAccount(secondaryAccountId);
    if(secondaryAccount){
      res.status(200).json({
        message:"secondary account sucesssfully fetched",
        data:secondaryAccount
      })
    }else{
      res.status(401).json({
        message:"secondary account  cannot fetched ",

      })
    }
  } catch (error) {
    console.log(error)
  }
});
export default router;
