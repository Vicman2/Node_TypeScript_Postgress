const  constants = {
    PORT : process.env.PORT, 
    DATABASE_CONNECTION: {
        DATABASE_USER:process.env.DATABASE_USER,
        DATABASE_HOST:process.env.DATABASE_HOST, 
        DATABASE_DATABASENAME: process.env.DATABASE_DATABASENAME,
        DATABASE_PASSWORD:process.env.DATABASE_PASSWORD,
        DATABASE_PORT:process.env.DATABASE_PORT
    }
}


export default constants