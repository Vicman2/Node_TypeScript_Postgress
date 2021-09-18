import express from 'express'
import userCtrl from '../controllers/userCtrl'
import { Validator } from '../validators';
import { idSchema } from '../validators/common';
import { signUpSchema } from '../validators/userValidator';

const router = express.Router();

// router.use('/addUser', userCtrl.addUser)

router.get(
    '/getUsers', 
    userCtrl.fetchUsers
)

router.get(
    '/getUser/:id',  
    Validator(idSchema, "params"),
    userCtrl.fetchUser
)

router.post(
    "/addUser",
    Validator(signUpSchema, "body"), 
    userCtrl.addUser
)

router.patch(
    "/updateUser/:id",
    Validator(idSchema, "params"),
    Validator(signUpSchema, "body"), 
    userCtrl.updateUser
)

router.delete(
    "/deleteUser/:id",
    Validator(idSchema, "params"),
    userCtrl.deleteUser
)


export default router