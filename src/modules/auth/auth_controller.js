
import jwt from 'jsonwebtoken';
import { User } from '../users/user_model'
import bcrypt from 'bcryptjs'
const register = async (user) => {

  try {
    const usersObject = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      status: user.status
    }
    // hashing a password

    const hashedPassword = await hashingPassword(usersObject.password);
    // updating the password before inserting
    usersObject.password = hashedPassword;
    const savedUser = await User.query().insert(usersObject);
    if (Object.keys(savedUser).length === 0) {
      return {
        message: "cannot added a user in the database"
      }
    } else {

      const token = jwt.sign({ email: savedUser.email, password: savedUser.password }, 'fskjvhjks')

      return {
        token,
        savedUser
      }
    }


  } catch (error) {
    console.log(error)
  }
}


// password hashing function
const hashingPassword = async (password) => {
  const hashPassword = await bcrypt.hashSync(password, 10);
  return hashPassword
}








// Login routes


const login = async (request) => {
  try {

    const userObject = {
      email: request.email,
      password: request.password
    }

    const checkUserExist = await User.query()
      .where({ email: userObject.email })

    if (checkUserExist.length === 0) {
      return {

      }
    } else {

      const hashed = await bcrypt.compare(userObject.password, checkUserExist[0].password);
      if (hashed) {
        return {
          checkUserExist
        }
      } else {
        return {

        }
      }


      // })

      console.log('jjj', checkHashedPAssword)

    }
  } catch (error) {
    console.log(error)
  }
}


export default {
  register,
  login
}