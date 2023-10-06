/* // o que são vetores ou arrays 

// como declarar um array 
let array = ['string', 1, true];
console.log(array);

// pode guardar vários tipos de dados 
let array = ['string', 1, true, ['array1'], [array2], [array3]]
console.log(array); 

array.forEach
array.forEach(function(item, index){console.log(item, index)});

array.push('novo item');
console.log(array);

array.pop();
console.log(array);

array.shift(array);
console.log(array)

array.unshift('novo item no inicio')
console.log(array);

array.log(array.indexOf(true));

array.splice(0, 3);
console.log(array);

let novoArray = array.slice (0, 3);
console.log(novoArray);

let object ={'string', number: 1, boolean: true, array: ["array"], objectinterno:{objectInterno: 'objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array
console.log(arrayInterno);

var { string, boolean, objetoInterno} = Object;
console.log(string, boolean, objectInterno);*/

