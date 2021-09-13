import express from "express";
import transactionController from "./transactions.controller";
const router = express.Router();

// create a transaction
router.post("/create", async (req, res) => {
  try {
    let transactionBody = req.body;
    let transaction = await transactionController.create(transactionBody);
    if (transaction) {
      res.status(501).json({
        message: "sucessfully created a transaction",
        data: transaction,
      });
    } else {
      res.status(400).send("unable to create a transaction");
    }
  } catch (error) {
    console.log(error);
  }
});

// update a transactions
router.put("/update/:id", async (req, res) => {
  try {
    let transactionId = req.params.id;
    let transactionBody = req.body;
    let transaction = await transactionItemsController.update(
      transactionId,
      transactionBody
    );
    if (transaction) {
      res.status(501).json({
        message: "sucessfully created a transaction",
        data: transaction,
      });
    } else {
      res.status(400).send("unable to create a transaction");
    }
  } catch (error) {
    console.log(error);
  }
});
// // delete a transactions
router.delete("/delete/:id", async (req, res) => {
  let transactionId = req.params.id;
  try {
    let transaction = await transactionItemsController.deleteTransaction(
      transactionId
    );
    if (transaction) {
      res.status(501).json({
        message: "sucessfully created a transaction",
        data: transaction,
      });
    } else {
      res.status(400).send("unable to create a transaction");
    }
  } catch (error) {
    console.log(error);
  }
});

// // get transactions
router.get("/get", async (req, res) => {
  try {
    let transaction = await transactionItemsController.getAll();
    if (transaction) {
      res.status(501).json({
        message: "sucessfully created a transaction",
        data: transaction,
      });
    } else {
      res.status(400).send("unable to create a transaction");
    }
  } catch (error) {
    console.log(error);
  }
});

// // get a specific transaction

router.get("/get/:id", async (req, res) => {
  try {
    let transactionId = req.params.id;
    let transaction = await transactionItemsController.getSpecificTransaction(
      transactionId
    );
    if (transaction) {
      res.status(501).json({
        message: "sucessfully created a transaction",
        data: transaction,
      });
    } else {
      res.status(400).send("unable to create a transaction");
    }
  } catch (error) {
    console.log(error);
  }
});
export default router;
