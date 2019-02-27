//2 - Programmera med Jest, grunderna
/*
test("Adds 2 + 2 to equal 4", () => {
    expect(2 + 2).toBe(4);
    });
 
//----------------------------------------------
test("Shows that 2 + 3 is not equal to 6", () => {
    expect(2 +3).not.toBe(6);
});

//-------------------------------------------------
test("Adding 0,1 + 0,2 to 0,3", () =>{
    expect(0,1 + 0,2).toBe(0,3);
}); //funkarr inte, den tar emot bara ett argument

test("Adding 0,1 + 0,2 to 0,3", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3); // avrundar till två närmaste decimalier
});

//2.5--------------------------------------------------------
test("testObject", ()=>{
const obj1 = {name:"test", data:[1,2,3]};
const obj2 = obj1;
expect(obj1).toBe(obj2);
});

test("testObject", ()=>{
const obj1 = {name:"test", data:[1,2,3]};
const obj2 = {name:"test", data:[1,2,3]};
expect(obj1).toBe(obj2); // Compared values have no visual difference. Note that you are testing for equality with the stricter `toBe` matcher using `Object.is`. For deep equality only, use `toEqual` instead.
});

test("testObject", ()=>{
const obj1 = {name:"test", data:[1,2,3]};
const obj2 = {name:"test", data:[1,2,3]};
expect(obj1).toEqual(obj2); 
});

*/
const functions = require("./errors.js");

describe ("My lists", () => {

    test("empty list", () => {
        expect(functions.emptyList()).toEqual([]);
    });

test("length is 0", () => {
    expect(functions.emptyList()).toHaveLength(0);
});

test("not an empty string", () => {
expect(functions.emptyList()).not.toEqual(" ");
});

});

describe ("Total Product Cost", () => {
          let products = [
    { name: "Banan", price: 10 },
    { name: "Mango", price: 30 },
    { name: "Lök", price: 15 }
  ];
    test("Return 0", () => {
    expect(functions.totalProductCost([])).toEqual(0);
        });

    test("Return 15 on 15", () => {
    let oneProduct = [{ name: "Lök", price: 15 }];
    expect(functions.totalProductCost(oneProduct)).toEqual(15);
    //let listWithOneProduct =  [products[2]];
    //let listWithProductsCosting15 = products.filter(product => product.price === 15);
    //expect(functions.totalProductCost(listWithOneProduct)).toEqual(15);
       });

    test("Return 55, the sum", () => {
    expect(functions.totalProductCost(products)).toEqual(55);
        });
});

describe("Add Products" , () => {

test("")
});

