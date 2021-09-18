import express from 'express'
import UserServices from '../services/userServices';

class UserCtrl{
    // async addUser(req: express.Request, res: express.Response){
    //     const userData = req.body;
    //     const response = await UserServices.addUser(userData)
    //     res.send({
    //         status: true, 
    //         message: "User created successfully",
    //         data: response
    //     })
    // }
    async fetchUsers(req: express.Request, res: express.Response){
        const response = await UserServices.getUsers()
        res.send({
            status: true, 
            message: "Users fetched successfully", 
            data: response
        })
    }

    async fetchUser(req: express.Request, res: express.Response){
        const {id} = req.params

        const response = await UserServices.getUser(parseInt(id))
        res.send({
            status: true, 
            message: "User fetched successfully", 
            data: response
        })
    }

    async addUser(req: express.Request, res: express.Response){

        const response = await UserServices.addUser(req.body)
        res.send({
            status: true, 
            message: "User added successfully", 
            data: response
        })
    }

    async updateUser(req: express.Request, res: express.Response){
        const {id} = req.params

        const response = await UserServices
            .updateUser( parseInt(id),req.body)


        res.send({
            status: true, 
            message: "User updated successfully",
            data: response
        })
    }


    async deleteUser(req: express.Request, res: express.Response){
        const {id} = req.params

        const response = await UserServices
            .deleteUser( parseInt(id))


        res.send({
            status: true, 
            message: "User deleted successfully",
            data: response
        })
    }

    
}

export default new UserCtrl()