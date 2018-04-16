import { Given, When, Then} from 'cucumber';
//import { defineSupportCode } from 'cucumber';
import assert from 'assert' ;
import request from 'supertest';

import { app } from '../../../src/server/server';
import { todoItemModel } from '../../../src/model/todoitemmodel';

// Given I have no todos
//     When I save a todo with title 'Get some milk'
//     Then I receive confirmation the todo has been saved
class State {
    public resStatus: any;
    public resText: any;

    constructor() {

    }

    public processResponse(err:any, res:any) {
        if (err) {
            console.log('an error occurred');
            assert.fail(err);
        }
        console.log(`the state is ${this}, ${res.status}, ${res.body.text}`);
        this.resStatus = res.status;
        this.resText = res.body.text;
    }

    public processAResponse(res:any) {
        console.log(`the state is ${this}, ${res.status}, ${res.body.text}`);
        this.resStatus = res.status;
        this.resText = res.body.text;
    }
}

let state: State = new State();
let answer: number = 0;


Given('I have no todos', ()=> {
    assert.equal(true,true);
});
  
When('I save a todo with title {string}', (text) => {
    answer = 1;
    request(app)
    .post('/todos')
    .send({text})
    .set('Accept', 'application/json')
    //.end(state.processResponse.bind(state));
    .then(response => {
        console.log(`${response.body.text}`);
    });
});
  
Then('I receive confirmation the todo has been saved with title {string}' , (text) => {
    assert.equal(answer, 1);
    assert.equal(state.resStatus, 200);
    assert.equal(state.resText, text);
});
