'use strict'

const Hash = use ('Hash')

const UserHook = exports = module.exports = {}

UserHook.hashPassword = async (Users) => {
    Users.password = await Hash.make(Users.password)
}
