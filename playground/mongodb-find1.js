// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  //same line as above and lets us use object destructuring for IDs

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a0a222815fbd95f6bd53fdd')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

db.collection('Users').find({name: 'Jesse Ontiveros'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
});
  // db.close();
});
