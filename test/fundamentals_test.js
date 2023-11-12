// arrow functions are discouraged

let showMessage = require('../src/fundamentals').showMessage;
describe('showMessage', function(){
    it('text = false', function(){
        assert.equal(showMessage(false), 'empty');
    })
    it('text = truthy', function(){
        assert.equal(showMessage('test'), 'test');
    })
})

let sum = require('../src/fundamentals').sum;
describe('fundamentals.js', function(){
    it('1+2=3', function(){
        assert.equal(sum(1,2), 3);
    })
})

let assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        })
    })
})
