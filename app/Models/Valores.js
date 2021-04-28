'use strict'

const BaseModel = use('MongooseModel')

const mongoose = use('Mongoose')

const {Schema} = mongoose

const ValoresSchema = new Schema(
  {
    id: String,
    Sensor: String,
    Valor: String,
    Fecha_Hora: String
  }
) 

/**
 * @class Valores
 */
class Valores extends BaseModel {
  /**
   * Valores's schema
   */
  static get schema () {
    return {

    }
  }
}

ValoresSchema.loadClass(Valores)

module.exports = mongoose.model('Valores',ValoresSchema)
