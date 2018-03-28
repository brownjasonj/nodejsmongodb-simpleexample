import { v4 as uuid} from 'uuid';

class TodoItem {
    public static collectionName: string = 'Todos'
    public ref: string;
    public text: string;
    public completed: boolean;

    constructor(ref: string | null, text: string) {
        this.text = text;
        this.completed = false;
        if (ref) {
            this.ref = ref;
        }
        else {
            this.ref = uuid();
        }
    }
}

export { TodoItem }