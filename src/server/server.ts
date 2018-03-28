import {connect, Schema, model } from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import { todoItemModel } from '../model/todoitemmodel';

const mongoDbUri = 'mongodb://localhost:27017';
const mongoDbName = 'TodoApp';

require('mongoose').Promise = global.Promise;
connect(`${mongoDbUri}/${mongoDbName}`);

var app = express();

app.use(bodyParser.json());

app.post('/todos', (request, response) => {
    console.log(request.body);
    
    var todo = new todoItemModel( {
        text: request.body.text
    });

    todo.save().then((doc) => {
        response.send(doc);
    }, (error) => { 
        response.status(400).send(error);
    });
});


app.listen(3000, () => {
    console.log(`Started on port 3000`);
});
