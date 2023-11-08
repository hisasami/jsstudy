// arrow functions are discouraged

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
