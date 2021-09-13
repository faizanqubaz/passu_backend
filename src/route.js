import express from "express";
import authRoute from "./modules/auth/auth_route";
import accountRoute from "./modules/accounts/accounts.route";
import primaryAccountRoute from "./modules/primaryAccounts/primaryAccounts.route";
import secondaryAccountRoute from "./modules/secondaryAccounts/secondaryAccount.route";
import transactionItemsRoute from "./modules/transactionItems/transactionItems.route";
import transactionRoutes from "./modules/transactions/transactions.route";
const router = express.Router();

router.use("/auth", authRoute);
router.use("/accounts", accountRoute);
router.use("/primaryaccounts", primaryAccountRoute);
router.use("/secondaryaccounts", secondaryAccountRoute);
router.use("/transactionitems", transactionItemsRoute);
router.use("/transactions", transactionRoutes);

export default router;
