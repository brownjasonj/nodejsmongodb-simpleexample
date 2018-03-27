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



    // just for testing, insert a bunch of TodoItems with the same item id
    var todoItem = new TodoItem(null, 'Another todo');
    var ref = todoItem.ref;
    for(var i = 0; i < 10000; i++) {
        db.collection(TodoItem.collectionName).insertOne(todoItem, 
            (error, result) => {
                if (error) {
                    console.log('Unable to insert ToDoItem', error);
                    return;
                }
                console.log(JSON.stringify(result.ops, undefined, 2));
             });
        todoItem = new TodoItem(ref, `This is my to do version ${i}`);
    }

    // client.close();
});