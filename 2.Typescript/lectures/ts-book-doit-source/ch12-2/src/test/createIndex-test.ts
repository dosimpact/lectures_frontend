import {connect} from '../mongodb/connect'

const createIndexTest = async() => {
  let connection
  try {
    connection = await connect()
    const db = await connection.db("ch12-2")
    const personsCollection  = db.collection("persons")
    let result = await personsCollection.createIndex({name: 1, age: -1})
    console.log(result) // name_1_age_-1
  } catch(e) {
    console.log(e.message)
  } finally {
    connection.close()
  }  
}

createIndexTest()
