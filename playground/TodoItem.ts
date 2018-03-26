import { ObjectID } from 'mongodb';

class TodoItem {
    public static collectionName: string = 'Todos'
    public _id?: ObjectID;
    public text: string;
    public completed: boolean;

    constructor(text: string) {
        this.text = text;
        this.completed = false;
    }
}

export { TodoItem }