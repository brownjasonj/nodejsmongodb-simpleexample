import { Schema } from "mongoose";
import { v4 as uuid} from 'uuid';

var todoItemSchema: Schema = new Schema({
  ref: {
      type: String
    },
  createdAt: {
      type: Date
    },
  text: {
      type: String,
      required: true,
      minlength: 1
  },
  completed: {
      type: Boolean,
      required: true,
      default: false
    },
  completedAt: {
      type: Date,
      default: null
  }
});

todoItemSchema.pre('save', function (next) {
    if (!this.createdAt) {
        this.createdAt = new Date;
    }
    if (!this.ref) {
        this.ref = uuid();
    }
    next();
  });


// todoItemSchema.pre("save", function (next) {
//   if (this.createdAt) {
//     this.createdAt = new Date();
//   }
//   next();
// });

export { todoItemSchema }