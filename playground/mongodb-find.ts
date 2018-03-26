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

    db.collection(TodoItem.collectionName).find().count().then((count) => {
        console.log(`Todos count: ${count}\n`);
    }, (error) => {
        console.log('Unable to fetch todos', error);
    });

    db.collection(User.collectionName).find({name: 'Fred'}).forEach((doc) => {
        var user = doc as User;
        console.log(`User : ${user.name}`);
    }, (error) => {
        console.log('Unable to fetch todos', error);        
    })
    // client.close();
});