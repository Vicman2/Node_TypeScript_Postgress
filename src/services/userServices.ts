
import { BadRequestError } from "../../lib/appError";
import {pool} from "../config/database";
import { UserSignUp } from "../interfaces/userInterface";




class UserServices{
    async getUsers(){
        const users = await pool
            .query('SELECT * FROM users ORDER BY id ASC');
        return users.rows
    }

    async getUser(id: number){
        // Query the Database
        const user = await pool
            .query(
                'SELECT * FROM users WHERE id = $1', 
                [id]
            )
        
        // If there is no user with this id, throw an error 
        if(user.rows.length === 0) 
            throw new BadRequestError("User do not exist")

        return user.rows[0]
        
    }

    async addUser(userData: UserSignUp){
        // Check if user already exists 

        const existingUser = await  pool
            .query(
                'SELECT * FROM users WHERE email = $1', 
                [userData.email]
            );

        if(existingUser.rows.length > 0)
            throw new BadRequestError("User already exist")
        
        // At this point, we have a unique user
        const newUser = await  pool
            .query(
                'INSERT INTO users (name, email) VALUES ($1, $2)', 
                [userData.name, userData.email]
            )
        return newUser


    }

    async updateUser(id: number, userData: UserSignUp){
        // Check if user already exists 

        const existingUser = await  pool
        .query(
            'SELECT * FROM users WHERE id = $1', 
            [id]
        );
    
        if(existingUser.rows.length === 0)
            throw new BadRequestError("User do not exist");
        
        // At this point, we have a user to update
        const updatedUser = await  pool
            .query(
                'UPDATE users SET name = $1, email = $2 WHERE id = $3', 
                [userData.name, userData.email, id]
            )
        

        return updatedUser

    }

    async deleteUser(id:number){
        // Check if user already exists 

        const existingUser = await  pool
        .query(
            'SELECT * FROM users WHERE id = $1', 
            [id]
        );
    
        if(existingUser.rows.length === 0)
            throw new BadRequestError("User do not exist");
        
        
        const deletedUser = await  pool
            .query(
                'DELETE from users WHERE id = $1', 
                [id]
            )

        return deletedUser
    }
}

export default new UserServices()