import {connect} from '../mongodb/connect'

const findDocumentTest = async() => {
  let connection, cursor
  try {
    connection = await connect()
    const db = await connection.db("ch12-2")
    const personsCollection  = db.collection("persons")
    const addressesCollection = db.collection("addresses")
    
    cursor = personsCollection.find({ name: "Jack" })
    const foundPersons = await cursor.toArray()
    console.log(foundPersons) // [ { _id: 5de606f79db96c1ea4c9c81c, name: 'Jack', age: 32 } ]

    cursor = addressesCollection.find({})
    const foundAddresses = await cursor.toArray()
    console.log(foundAddresses) // [ { _id: 5de606f79db96c1ea4c9c81d, country: 'korea', city: 'seoul' } ]
  } catch(e) {
    console.log(e.message)
  } finally {
    connection.close()
  }  
}

findDocumentTest()