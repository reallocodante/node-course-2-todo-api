// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  //same line as above and lets us use object destructuring for IDs

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
     _id: new ObjectID('5a04862cad396d39fb4bf2de')
   }, {
     $set: {
       name: 'Andrew'
     },
     $inc: {
       age: 1
     }
   }, {
     returnOriginal: false
   }).then((result) => {
     console.log(result);
   });



  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5a04862cad396d39fb4bf2de')
  // }, {
  //   $set: {
  //     name: 'Jesse'
  //     }
  //   }, {
  //   $inc: {
  //     age: +1
  //     }
  //   }, {
  //     returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a04862cad396d39fb4bf2de')
  // }, {
  //   $set: {
  //     name: 'Jesse'
  //   }, {
  //     $inc: {
  //       age: 1
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  // db.close();
});
