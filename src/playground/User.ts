import { ObjectID } from 'mongodb';

class User {
    public static collectionName: string = 'Users';

    public _id?: ObjectID;
    public name: string;
    public age: number;
    public location: string;

    constructor(name: string, age: number, location: string) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
}

export { User }