import assert from"node:assert/strict";
import {calcDistance} from"./calcDistance.js";
import {sumOfNumbers} from"./sumAndProductOutput.js";
import {productOfNumbers} from"./sumAndProductOutput.js";
<<<<<<< HEAD
import {convertFahrenheit} from"./convertFahrenheit.js";
import {calcDownpayment} from"./calcDownpayment.js";

//calculating Distance Test
=======
import {calcDistance} from"./calcDistance.js";

>>>>>>> 1b981e2b748861d8f01809e19f36ddb167548ed1
describe("Test for calculating distance: ",function(){
    it("Expected 7.07 ",function(){
        assert.equal(calcDistance(0,0,5,5),7);
    });
});

//Sum of Number Tests
describe("Test for sum: ",function(){
    it("Expected output sum=10 ",function(){
        assert.equal(sumOfNumbers(1234),10);
    });
    it("Expected output sum=3:",function(){
        assert.equal(sumOfNumbers(102),3);
    });
    it("Expected output sum=8:",function(){
        assert.equal(sumOfNumbers(8),8);
});
});

//ProductOfNumbers test
describe("Test for product: ",function(){
    it("Expected output product=24: ",function(){
        assert.equal(productOfNumbers(1234),24);
    });
    it("Expected output product=0:",function(){
        assert.equal(productOfNumbers(102),0);
    });
    it("Expected output product=8:",function(){
        assert.equal(productOfNumbers(8),8);
});
});
//Fahrenheit conversion Test

describe("Testing temprature conversion",function(){
    it("Expect 0:",function(){
        assert.equal(convertFahrenheit(32),0);
    });
    it("Expect -18:",function(){
        assert.equal(convertFahrenheit(0),-18);
    });
    
    it("Expect 100: ",function(){
        assert.equal(convertFahrenheit(212),100);
     });
    });
    
    //calculate Down Payment Test
<<<<<<< HEAD
=======
    
>>>>>>> 1b981e2b748861d8f01809e19f36ddb167548ed1
describe("Test for downPayment: ",function(){
    it("Expect 2500: ",function(){
        assert.equal(calcDownpayment(40000),2000);
    });
    it("Expect 2500 ",function(){
        assert.equal(calcDownpayment(50000),2500);
    });
    it("Expect 7500: ",function(){
        assert.equal(calcDownpayment(100000),7500);
    });
    it("Expect 25000: ",function(){
        assert.equal(calcDownpayment(250000),25000);
});
});
