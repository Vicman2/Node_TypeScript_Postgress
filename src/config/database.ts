import {Pool} from "pg"
import constants from './constants'

let pool: Pool
function databaseConnection(){
    const connectionPoll = new Pool({
        user: constants.DATABASE_CONNECTION.DATABASE_USER,
        host:  constants.DATABASE_CONNECTION.DATABASE_HOST,
        database:  constants.DATABASE_CONNECTION.DATABASE_DATABASENAME,
        password:  constants.DATABASE_CONNECTION.DATABASE_PASSWORD,
        port: 5432,
    })
    connectionPoll.connect()
    .then(() => {
        console.log("::: Connected to Postgress database successfully")
        pool = connectionPoll
    }).catch(err => {
        console.log("There was an error connecting to Postgress", err)
    })
}

export{
    databaseConnection, 
    pool
}