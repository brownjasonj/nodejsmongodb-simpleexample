import { model } from 'mongoose';

import { UserSchema } from '../schemas/user';

var userModel = model('user', UserSchema);

export { userModel }

// var UserModel = model('User', UserSchema);

// var newUser = new UserModel({
//     email: "brownjasonj@gmail.com"
// });

// newUser.save().then((doc) => {
//     console.log('Save user', doc);
// }, (error) => {
//     console.log('Unable to save User');
// })