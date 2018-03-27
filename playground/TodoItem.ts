import { ObjectID } from 'mongodb';

class TodoItem {
    public static collectionName: string = 'Todos'
    public ref: ObjectID;
    public text: string;
    public completed: boolean;

    constructor(id: ObjectID | null, text: string) {
        this.text = text;
        this.completed = false;
        if (id) {
            this.ref = id;
        }
        else {
            this.ref = new ObjectID();
        }
    }
}

export { TodoItem }