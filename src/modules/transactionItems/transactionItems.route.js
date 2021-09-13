import express from "express";
import transactionItemController from "./transactionItems.controller";
const router = express.Router();

router.post("/create", async (req, res) => {
  let transactionBody = req.body;
  try {
    const transactionItem = await transactionItemController.create(
      transactionBody
    );
    if (transactionItem) {
      res.status(501).json({
        message: "successfully created a transaction item",
        data: transactionItem,
      });
    } else {
      res.status(400).json({
        message: "cannot  created a transaction item",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// update a transaction_items
router.put("/update/:id", async (req, res) => {
  let transactionItemBody = req.body;
  let transactionItemId = req.params.id;
  try {
    const transactionItem = await transactionItemController.update(
      transactionItemId,
      transactionItemBody
    );
    if (transactionItem) {
      res.status(200).json({
        message: "successfully updated a transaction item",
        data: transactionItem,
      });
    } else {
      res.status(400).json({
        message: "cannot  updated a transaction item",
      });
    }
  } catch (error) {}
});
// delete a transactionItems
router.delete("/delete/:id", async (req, res) => {
  try {
    let transactionItemId = req.params.id;
    const transactionItem = await transactionItemController.deleteTransactionItem(
      transactionItemId
    );
    if (transactionItem) {
      res.status(200).json({
        message: "successfully created a transaction item",
        data: transactionItem,
      });
    } else {
      res.status(400).json({
        message: "cannot  created a transaction item",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
// get a transactionItems
router.get("/get", async (req, res) => {
  try {
    const transactionItem = await transactionItemController.getAll();
    if (transactionItem) {
      res.status(200).json({
        message: "successfully fetched a transaction item",
        data: transactionItem,
      });
    } else {
      res.status(400).json({
        message: "cannot  fetched a transaction item",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
// get a specific transactionItems
router.get("/get/:id", async (req, res) => {
  let transactionItemId = req.params.id;
  try {
    const transactionItem = await transactionItemController.getSpecificTransactionItem(
      transactionItemId
    );
    if (transactionItem) {
      res.status(200).json({
        message: "successfully fetched a transaction item",
        data: transactionItem,
      });
    } else {
      res.status(400).json({
        message: "cannot  fetched a transaction item",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
