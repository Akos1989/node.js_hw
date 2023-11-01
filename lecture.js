console.log("My first Node.js app");


const arr = [1,2,3,10,3,5];

console.log(arr.reduce((element,max) => element > max ? element : max, 0)); 


const variable = 123;

console.log(variable.toString().split("").map(Number).reduce((a,b) => a+b,0));

const product1 = {
    name: "Kenyér",
    quantity: 10,
    price: 500,
    id: "kgsjdhgsdf",
};

const product2 = {
    name: "Kifli",
    quantity: 3,
    price: 100,
    id: "kgsjdhgdgdfgf",
};

const product3 = {
    name: "Tej",
    quantity: 20,
    price: 600,
    id: "kgsjdhgsd20f",
};

const products= [];
products.push(product1,product2,product3);
products.forEach((product) => console.log(product));
console.log(products.reduce((cheapest, current) => current.price < cheapest.price ? current : cheapest))



function changePrice (productId,newPrice) {
    for (let i = 0; i < products.length; i++){
        if(products[i].id == productId){
            products[i].price = newPrice;
        }
    }
}
;

changePrice("kgsjdhgsd20f", 1);
console.log(products);

changePrice(process.argv[2], Number(process.argv[3]));
console.log(products);


const variable2 = process.argv[2];
console.log(variable2.toString().split("").map(Number).reduce((a,b) => a+b,0));


