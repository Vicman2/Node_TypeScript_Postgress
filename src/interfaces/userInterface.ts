interface AUser extends Document{
    email: string, 
    firstname: string, 
    lastname: string,
    password: string, 
    fullname: string, 
    _doc: any
}

interface UserSignUp{
    name: string, 
    email: string
}


export {
    AUser, 
    UserSignUp
}