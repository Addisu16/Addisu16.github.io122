import assert from "node:assert/strict";
import {calcDownpayment} from"./calcDownpayment.js";
import {convertFahrenheit} from"./convertFahrenheit.js";
import {sumAndProductOutput} from"./sumAndProductOutput.js";
import {calcDistance} from"./calcDistance.js";

//sumAndProductOutput(1234);
//sumAndProductOutput(102);
//sumAndProductOutput(8);

describe("Test for calculating distance: ",function(){
    it("Expected 7.07 ",function(){
        assert.equal(calcDistance(0,0,5,5),7);
    });
});


describe("Test for sum and product: ",function(){
    it("Expected output is sum=10,product=24: ",function(){
        assert.equal(sumAndProductOutput(1234),10,24);
    });
    it("Expected output is sum=3,product=0:",function(){
        assert.equal(sumAndProductOutput(102),3,0);
    });
    it("Expected output is sum=8,product=8:",function(){
        assert.equal(sumAndProductOutput(8),8,8);
});
});


