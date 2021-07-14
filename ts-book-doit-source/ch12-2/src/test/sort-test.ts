import {connect} from '../mongodb/connect'

const sortTest = async() => {
  let connection
  try {
    connection = await connect()
    const db = await connection.db("ch12-2")
    const personsCollection  = db.collection("persons")
    await personsCollection.createIndex({name: 1, age: -1})
    await personsCollection.deleteMany({})
    await personsCollection.insertMany([
      {name: "Jack", age: 32}, {name: "Jack", age: 33}, {name:"Jane", age: 10}
    ])

    const cursor = personsCollection.find({ name: "Jack" }).sort({age: -1})
    const result = await cursor.toArray()
    console.log(result) /* [
      { _id: 5de61e788086e31140ac244d, name: 'Jack', age: 33 },
      { _id: 5de61e788086e31140ac244c, name: 'Jack', age: 32 }
    ] */
  } catch(e) {
    console.log(e.message)
  } finally {
    connection.close()
  }  
}

sortTest()