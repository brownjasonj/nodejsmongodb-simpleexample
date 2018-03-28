import { Schema } from "mongoose";

var UserSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

export { UserSchema }