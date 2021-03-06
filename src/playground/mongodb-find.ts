import { MongoClient, ObjectID } from 'mongodb';

import { User } from './User';
import { TodoItem } from './TodoItem';

const mongoDbUri = 'mongodb://localhost:27017';
const mongoDbName = 'TodoApp';



MongoClient.connect(mongoDbUri, (error, client) => {
    if (error) {
        console.log(`Unable to connect to MongoDB server: ${mongoDbUri}`) ;
        return;
    }
    console.log(`Connected to MongoDB server: ${mongoDbUri}`);

    const db = client.db(mongoDbName);
    
    // db.collection(TodoItem.collectionName).find({_id: new ObjectID('5ab893d21aae15663f54a907')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //     client.close();
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });

    // db.collection(TodoItem.collectionName).find().count().then((count) => {
    //     console.log(`Todos count: ${count}\n`);
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });

    // db.collection(User.collectionName).find({name: 'Fred'}).forEach((doc) => {
    //     var user = doc as User;
    //     console.log(`User : ${user.name}`);
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);        
    // })



    // find documents using the timestamp of the ObjectID.  This will enable using mongodb as immutable store
    var timestamp = new Date('2018/03/23').getTime();
    //var timestamp = Date.now();
    var objectId = ObjectID.createFromTime(timestamp / 1000);

    // db.collection(TodoItem.collectionName).find({_id: {$gt: objectId}, completed: false}).forEach((doc) => {
    //     console.log(`Todo : ${JSON.stringify(doc)}`);
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);        
    // })


    db.collection(TodoItem.collectionName)
    .find({_id: {$gt: objectId}, ref: new ObjectID("5aba5c05ab2fb8120836ebc7")})
    .sort({ _id: -1 })
    .limit(10)
    .forEach((doc) => {
        console.log(`Todo : ${JSON.stringify(doc)}`);
    }, (error) => {
        console.log('Unable to fetch todos', error);        
    })


    // client.close();
});