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
    
    // delete Many
    // db.collection(TodoItem.collectionName).deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    // db.collection(User.collectionName).deleteMany({name: 'Fred'}).then((result) => {
    //     console.log(result);
    // });

    // delete One
    // db.collection(TodoItem.collectionName).deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // findOneAndDelete
    // db.collection(TodoItem.collectionName).findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // find and delete one using Id
    db.collection(User.collectionName).findOneAndDelete({_id: new ObjectID("5ab7e81568838c6463c1be44")}).then((result) => {
        console.log(result);
    });


    // client.close();
});