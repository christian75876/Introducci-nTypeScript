//Variables y constantes: Tipos, tipos personalizados

// type product = {
//     id: number,
//     name: string,
//     price: number
// };

/**¿Cómo ayuda el tipado estático a prevenir errores en el manejo de variables y constantes?
 * Al estar declarado cada una de las variables y constantes podran ser manejadas con mayor eficacia por el software
 */


//2. Ooperadores (aritmeticos, bolleanos)

// const thisEven = (a:number) => {
//    const result: number =  a % 2;
//    const isEven: boolean = result? false: true;
//     return isEven;
// }

// console.log(thisEven(2));

/** ¿Qué ventajas ofrece el uso de operadores en un lenguaje tipado como TypeScript?
 * Una mayor legibilidad de lectura y mantenimiento del codigo
 */

//3. Estructuras de decisión (if, switch, ternarios)

// const typeNumber = (num:number) => {

//     switch (num) {
//         case 0:
//             return 'The number cero';
//     }

//     if(num > 1){
//         return 'The number is positiv';
//     }else if(num < 0){
//         return 'The number is negative';
//     }
// };

// console.log(typeNumber(-6));

//4. Estructuras de iteración (while, for, foreach, map)

// const names = () => {
//     const namesArray: string[] = ['John', 'Alice', 'Bob'];
//     let index = 0;

//     while (index < namesArray.length) {
//         console.log(namesArray[index]);
//         index++;
//     }
// }

/**¿Qué ventajas tiene el método map sobre un bucle for en TypeScript?
 * Una de las ventajas que presenta es la inmutabilidad del array
 */


//Estructuras de Datos y Funciones

//Tarea 1: Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce.
// const numbers: number[] = [1, 2, 3, 4, 5];
// const result : number = numbers.reduce((acu, dat,) => acu += dat, 1);
// console.log(result)


//Tarea 2: Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.
// const concat = () => {
//     const strings: string[] = ['Hola', ' ', 'mundo'];
//     const result: string = strings.join('');
//     console.log(result);
// }
// concat()


//Tarea 3: Define un array de objetos User con propiedades id y name, e imprime el nombre de cada usuario en consola.
// const user: {id: number, name:string}[] = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Alice'},
//     {id: 3, name: 'Bob'}
// ];
// user.forEach((u) => console.log(u.name));

//Tarea 4: Implementa una función que reciba un array de números y retorne el mayor valor.
// const max = (numbers: number[]) => {
//     return Math.max(...numbers);
// };
// const numbers: number[] = [11,2,6,10];
// console.log(max(numbers));

/**Pregunta: ¿Cómo se puede asegurar el tipo de datos en un array en TypeScript?
 * se puede asegurar declarando los tipos de datos que este va a recibir.
*/


//2. Objetos
//Tarea: Define un objeto Car con propiedades marca, modelo y año. Crea una instancia de Car e imprime sus propiedades en consola.
interface Car {
    brand: string,
    model: string,
    year: number,
};

const myCar: Car = {
    brand: 'Tesla',
    model: 'Model X',
    year: 2022,
};
// console.log(myCar);


//Tarea 2: Con base en el objeto Car, crea una clase que posea un metodo estatico que reciba un objeto Car y retorne un string con la información del carro
// class Carro {
//     brand: string;
//     model: string;
//     year: number;
//     constructor(brand: string, model: string, year: number) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     static information(car:Car):string {
//         return `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`;
//     }
// };

//Tarea 3: Implementa una función que reciba un objeto Car y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.

// const newCars = (car: Car) => {
//     const newCar = {
//         ...car,
//         year: car.year + 1,
//     }
//     return newCar;
// };
// console.log(newCars(myCar))

/**Pregunta: ¿Qué ventajas ofrece el uso de tipos personalizados en objetos?
 * las ventajaas que ofrece tener tipos personalizados es que somos mas restrictivos y podemos recibir distintos tipos en un mismo elemento y validar que estos sean los esperados.
*/


//3. Funciones
//Tarea: Implementa una función que reciba un array de números y retorne el mayor valor.
// const maxNumber = (array: number[]) => {
//     return Math.max(...array);
// };
// console.log(maxNumber([1,5,8]));

//Tarea 2: Implementa una funcion que reciba rest parameters y retorne error si almenos uno de los parametros pasados no es del tipo de los dos primeros parametros. Asegurarse que los dos primeros parametros sean del mismo tipo.

// const validateParams = <T>(a: T, b: T, c: T): string | undefined => {
//     if (typeof a !== typeof b || typeof b !== typeof c) {
//         return 'Todos los parámetros deben ser del mismo tipo';
//     }
//     // Si todos los parámetros son del mismo tipo, no retorna nada (undefined)
//     return undefined;
// };
// console.log(validateParams(4,4,true));

//Tarea 3: Define una funcion que reciba una matriz cuadrada de numeros como parametros y devuelva la matriz gira 90 grados en sentido horario. (2 Riwi points)

const rotateMatrix = (matrix: number[][]) => {

};
