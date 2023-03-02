/*eslint-disable-next-line no-unused-vars*/


import assert from"node:assert/strict";
import {isVowel} from"./isVowel.js";

describe("check if it is vowel: ", function(){
it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
});
it("e is vowel ",function(){
assert.equal(isVowel("e"),true);
});
it("i is vowel",function(){
    assert.equal(isVowel("i"),true);
});
it("o is vowel",function(){
    assert.equal(isVowel("o"),true);
});
it("u is vowel",function(){
    assert.equal(isVowel("u"),true);
});
it("n is not vowel",function(){
    assert.equal(isVowel("n"),false);
});

});