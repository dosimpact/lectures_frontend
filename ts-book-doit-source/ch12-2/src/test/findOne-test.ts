import {connect} from '../mongodb/connect'
import {ObjectId} from 'mongodb'

const findOneTest = async() => {
  let connection, cursor
  try {
    connection = await connect()
    const db = await connection.db("ch12-2")
    const personsCollection  = db.collection("persons")
    
    cursor = personsCollection.find({})
    const foundPersons = await cursor.toArray()
 
    const _id = foundPersons[0]._id
    const result = await personsCollection.findOne({_id})
    console.log(result) // { _id: 5de606f79db96c1ea4c9c81c, name: 'Jack', age: 32 }
  } catch(e) {
    console.log(e.message)
  } finally {
    connection.close()
  }  
}

findOneTest()