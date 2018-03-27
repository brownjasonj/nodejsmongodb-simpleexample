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
    
    // "5ab89b8cfea624b62939d0ed"
    db.collection(TodoItem.collectionName).findOne({_id: new ObjectID("5ab89b8cfea624b62939d0ed")},{}, (error, result) => {
        if (error) {
            console.log('Unable to find document');
            return;
        }
        var todo = result as TodoItem;

        todo.text = 'Eat Lunch and Dinner';

        db.collection(TodoItem.collectionName).update({_id: new ObjectID("5ab89b8cfea624b62939d0ed")}, todo, (error, result) => {
            if (error) {
                console.log(`Failed to update document ${todo}`);
                return;
            }
            console.log(`Updated document to ${JSON.stringify(result)}`);
        })
        console.log(result);
    });
    // client.close();
});