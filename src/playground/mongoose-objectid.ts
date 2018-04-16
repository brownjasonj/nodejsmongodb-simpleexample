import { ObjectID } from 'mongodb';
import { connect } from 'mongoose';

import { todoItemModel } from '../model/todoitemmodel';


const mongoDbUri = 'mongodb://localhost:27017';
const mongoDbName = 'TodoApp';

require('mongoose').Promise = global.Promise;
connect(`${mongoDbUri}/${mongoDbName}`);

var id = '5ad477e390c6b95281b5225d';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}
else {
    console.log(`ID ${id} is valid`);
}

todoItemModel.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log(`Todo By Id ${todo}`);
}).catch((error) => {
    console.log(error);
});