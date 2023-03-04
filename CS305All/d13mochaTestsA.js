import assert from "node:assert/strict";
import {computeSalesCommission} from"./computeSalesCommission.js";
import {compoundInterest} from"./compoundInterest.js";


// Compute Sales Commission
describe("test of ComputSalesCommission",function(){
    it("tests salaried and 200 sales",function(){
    assert.equal(computeSalesCommission(true,200), 0);
    });
    it("tests not salaried and 200 sales",function(){
    assert.equal(computeSalesCommission(false,200), 0);
    });
    it("tests salaried and 300 sales",function(){
    assert.strictEqual(computeSalesCommission(true,300), 3);
    });
    it("tests not salaried and 300 sales",function(){
    assert.equal(computeSalesCommission(false,300), 6);
    });
    it("tests salaried and 3500 sales",function(){
    assert.equal(computeSalesCommission(true,3500), 65);
    });
    it("tests not salaried and 3500 sales",function(){
    assert.equal(computeSalesCommission(false,3500), 100);
    });
   });


//Compound Interest Rate
   describe("test for compoundInterestRate",function(){
    it("test interestRate for 5 years",function(){
    assert.equal(compoundInterest(1000,0.15,5),1007.52);
   });
  
   it("test interestRate for 10 years",function(){
    assert.equal(compoundInterest(2500,0.15,10),2537.57);
   });
});
