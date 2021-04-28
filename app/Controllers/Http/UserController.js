'use strict'
const User = use('App/Models/User')
class UserController {
    async store ({request, response}){
        const userData = request.only(['username','email','password'])
        const user = await User.create(userData)

        return response.created({
            status: true,
            data: user
        })
    }

    async index({response}){
        const data = await User.all();
        try{
            return response.status(200).json(data);
        } catch(e){
            return response.status(400).send({'Error':e});
        }
    }
}

module.exports = UserController
