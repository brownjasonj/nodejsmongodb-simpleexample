import { MongoClient, ObjectId } from 'mongodb';

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
    
    // db.collection(TodoItem.collectionName).insertOne(new TodoItem('Something to do'), 
    //     (error, result) => {
    //         if (error) {
    //             console.log('Unable to insert Todo item', error);
    //             return;
    //         }
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //      });

    var user = new User('Fred', 27, 'USA');
    db.collection(User.collectionName).insertOne(user, 
    (error, result) => {
        if (error) {
            console.log('Unable to insert User', error);
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
     });

    client.close();
});