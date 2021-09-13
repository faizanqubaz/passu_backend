import express from 'express';
import middlewares from '../../middleware/auth_middleware';
import user from './auth_controller'
const router = express.Router();

router.post('/register', middlewares.checkUserExist, async (req, res, next) => {

  const userBody = req.body;
  try {
    const users = await user.register(userBody);
    if (Object.keys(users).length == 0) {
      return res.status(500).json({
        message: "no users selected by the client"
      })
    } else {
      return res.status(200).json({
        message: "sucessfully users saved !!!",
        user: users
      })
    }
  } catch (error) {
    console.log(error)
  }

})


// login api
router.post('/login', middlewares.verifyToken, async (req, res, next) => {
  let requestBody = req.body;
  try {

    const users = await user.login(requestBody);
    if (Object.keys(users).length == 0) {
      return res.status(500).json({
        message: "User does not exist in the database .. Please Signup !!!"
      })
    } else {
      return res.status(200).json({
        message: "sucessfully users LogedIn!!!",
        user: users
      })
    }
  } catch (error) {
    console.log(error)
  }
})




export default router;