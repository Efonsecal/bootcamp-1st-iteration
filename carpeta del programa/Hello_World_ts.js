// import promptSync from 'prompt-sync';
// const prompt = promptSync();
// const item1: number = 29.99;
// const item2: number = 49.99;
// const item3: number = 19.99;
// const tax: number = 0.07;
// //Shopping Cart Cost without Taxes
// let sccwt: number = item1 + item2 + item3;
// console.log('\n\nShopping Cart Cost without Taxes: $' + sccwt);
// console.log(`    
// Shopping Cart Cost without Taxes: $${sccwt}`);
// //Taxes Cost
// let tc: number = sccwt * tax;
// console.log('Taxes Cost: $' + tc);
// //Shopping Cart Total Cost
// console.log('Shopping Cart Total Cost: $' + (sccwt + tc) + '\n\n');
// sccwt = 20;
// sccwt /= 2;
// let ok = prompt('please input:');
// // Declaraciion de variable array
// let array1: ({name: string} | {age: number})[] = [{ age: 9 }, { name: 'ok'}];
// console.log(array1[1]);
// // Declaracion obj var
// let obj1 = {
//     age: 9,
//     name: 'esteban',
//     worksAtGlobant: true,
//     grades: [5, 6, 3],
// }
// let obj3 = {
//     age: 9,
//     name: 'esteban',
//     worksAtGlobant: true,
//     grades: [5, 6, 3],
// }
// let obj2 = {
//     age: 9,
//     name: 'esteban',
//     worksAtGlobant: true,
//     grades: [5, 6, 3],
// }
// let objOtro = {
//     ok: true
// }
// const objArray = [obj1, obj2, obj3, objOtro];
// interface student {
//     name: string,
//     grade: number,
//     isValid?: boolean,
// }
// const student4 = {
//     name: 'Esteban',
//     grade: 9,
// };
// const student2 = {
//     name: 'Esteban',
//     grade: 9
// };
// const student3 = {
//     name: 'Esteban',
//     grade: 9,
//     isValid: true
// };
// let studentArray = [student4, student2, student3];
// //Procesar calificaciones
// let grades = [100, 45, 89, -1, 80];
// let gradesSum: number = 0;
// let counter: number = 0;
// let exceptionalStudentFound: boolean = false;
// for (const grade of grades){
//     if (grade === 1000){
//         console.log(`Exceptional student! Average is 100!`);
//         exceptionalStudentFound = true;
//     } else if (grade >= 0){
//         gradesSum += grade;
//         counter++;
//     } else {
//         // mensaje de -1
//     }
// }
// if (!exceptionalStudentFound) {
//     let Avg: number = gradesSum/counter;
//     console.log(`Average Score: ${Avg}`);
// }
// // Create an array named inventory containing objects
// // let inventory=[{id:'1001',nombre:'cocina a gas',precio:'200', instock:'Yes'},{id:'1002',nombre:'horno',precio:'300',instock:'NO'}];
// //Adding a new item to the inventory array
// //console.log(inventory);
// //remove an item from the array based on its id
// // //Adding a new item to the inventory array
// // inventory.push({id:'1003',nombre:'terma',precio:'150', instock:'Yes'});
// // //delete an item of the inventory array
// // let valuetoremove=inventory.pop();
// // console.log(inventory);
// // console.log(valuetoremove);
// // //Search for another item based on its id and modify it's initial price.
// // // encontrar el indice del objeto que queremos que cmabiar
// // const inventarioindex=inventory.findIndex
// /////////////////////////////////
// //Inventario inicial
// let inventory = [
//     {id: 1, name: "Mouse", price: 25},
//     {id: 2, name: "Keyboard", price: 50},
//     {id: 3, name: "Monitor", price: 200},
// ];
// //Agregar un nuevo producto al inventario (usando push)
// const newItem = {id: 4, name: "Webcam", price: 80};
// inventory.push(newItem);
// //Eliminar el item por id
// const idToRemove = 2;
// for (let i = 0; i < inventory.length; i++){
//     if (inventory[i].id === idToRemove) {
//         inventory.splice(i, 1);
//         console.log(`Producto con ID ${idToRemove} eliminado`);
//         break;
//     }
// }
// // Buscar un item por ID y modificar su precio
// const idToUpdate = 3;
// let found = false;
// let i = 0;
// while (i < inventory.length) {
//     if (inventory[i].id === idToUpdate) {
//         inventory[i].price = 180;
//         console.log (`Precio del producto con ID ${idToUpdate} actualizado.`);
//         found = true;
//         break;
//     }
//     i++;
// }
// if (!found) {
//     console.log (`Producto con ID ${idToUpdate} no encontrado`);
// }
// for (let item of inventory) {
//     for (let key in item) {
//         console.log(`The key ${key}: has value ${item[key]}`);
//     }
// }
// // array
// let books = [
//     'book1', // <---- in: 0, of: 'book1'
//     'book2', // <---- in: 1, of: 'book2'
// ];
// // object
// let book = {
//     author: 'ok', // <---- of: 'ok', in: 'author'
//     year: 1555, // <---- of: 1555, in: 'year'
// }
// let currentAuthor = book['author']; // <--- 'ok' ---> currentAuthor
// let currentYear = book['year']; // <--- 1555 ---> currentYear+++
// //Definimos el objeto original
// const product = {
//     id: 1,
//     name: "Laptop",
//     price: 1500,
//     tags: ["electronics", "portable", "new"],
// };
// //Clonamos el objeto
// const newProduct = { ...product, archievedTags: product.tags };
// //Cambiamos las propiedades del nuevo objeto
// newProduct.name = 'Smartphone';
// newProduct.price = 999;
// newProduct.tags = ['electronics', 'mobile', 'discounted'];
// //Se imprimen ambos objetos
// console.log(`Original product: ${product}`);
// console.log(`Cloned and Modified Product: ${newProduct}`);
// //Mostrar los elementos de los objetos
// for (let key in product) {
//     console.log(`The key ${key}: has value ${product[key]}`);
// }
// for (let key in newProduct) {
//     console.log(`The key ${key}: has value ${newProduct[key]}`);
// }
// function greet(name: string, age: number): string {
//     let resultOfTheFunc = `Your name is ${name} and you are ${age} years old`;
//     resultOfTheFunc = `Data of the person: ${resultOfTheFunc}`;
//     return resultOfTheFunc;
// }
// let people = [  {name: 'Alice', age: 30}, 
//                 {name: 'Carol', age: 22}, 
//                 {name: 'Carl', age: 45}];
// let result1 = greet('ok', 2);
// for (const person of people) {
//     console.log(greet(person.name, person.age));
// }
// people.forEach(person => console.log(greet(person.name, person.age)));
// const sumadoConDos = people.map(person => person.age + 2);
/// Functions
// Exersice 1
// Basic named function
function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
// const reqRadius: number = parseInt(prompt('please input radius:') as string);
var reqRadius = 5;
var resultArea = circleArea(reqRadius);
console.log("This is the area ".concat(resultArea, " when the circle radius is ").concat(reqRadius));
// Anonymous function
var perimeter = function (width, height) {
    return (width * 2) + (height * 2);
};
var reqDimensions = [4, 6];
var resultPerimeter = perimeter(reqDimensions[0], reqDimensions[1]);
console.log("The perimeter of width ".concat(reqDimensions[0], " and height ").concat(reqDimensions[1], " is: ").concat(resultPerimeter));
// Arrow function
var cubeArea = function (side) {
    return Math.pow(side, 3);
};
var reqSide = 7;
console.log("The volume of a cube which side is ".concat(reqSide, " is: ").concat(cubeArea(reqSide)));
