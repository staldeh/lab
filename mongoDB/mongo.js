const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:8081/kennel'
//docker container run --detach --publish 8081:27017 --name mongo mongo:3.4

mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("Connected to mongo!")
  const db = client.db('kennel')

  const collection = db.collection('dogs')
    collection.insertOne({name: 'Roger'}, (err, result) => {
    })

  client.close() 

})



