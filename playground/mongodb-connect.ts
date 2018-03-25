import { MongoClient } from 'mongodb';

const mongoDbUri = 'mongodb://localhost:27017';
const mongoDbName = 'TodoApp';

class TodoItem {
    public static collectionName: string = 'Todos'

    public text: string;
    public completed: boolean;

    constructor(text: string) {
        this.text = text;
        this.completed = false;
    }
}

class User {
    public static collectionName: string = 'Users';

    public name: string;
    public age: number;
    public location: string;

    constructor(name: string, age: number, location: string) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
}


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

    db.collection(User.collectionName).insertOne(new User('John', 27, 'USA'), 
    (error, result) => {
        if (error) {
            console.log('Unable to insert User item', error);
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
     });

    client.close();
});