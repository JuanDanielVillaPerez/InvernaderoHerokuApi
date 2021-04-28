'use strict'

const BaseModel = use('MongooseModel')

const mongoose = use('Mongoose')

const {Schema} = mongoose

const UserSchema = new Schema(
  {
    id: String,
    username:{
      type:String,
      required: true,
      unique: false
    },
    email:{
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    password:{
      type:String,
      required: true
    },
    date: {type: Date, default:Date.now}
  }
) 

/**
 * @class Users
 */
class Users extends BaseModel {
  static get PrimaryKey() {
    return 'id'
  }
  /**
   * Users's schema
   */
  static get schema () {
    return {

    }
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

UserSchema.loadClass(Users)

module.exports = mongoose.model('Users',UserSchema)
