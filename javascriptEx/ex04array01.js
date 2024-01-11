let array = [];

array[3] = 100;

console.log(array); // [ <3 empty items>, 100 ] => [undifined, undifined, undifined, 100] empty =undifined

//변수는 자료형이 없기 때문에 다 들어간다.
array= [1, '2', true, NaN, {}, [100,203,12,1233], [] , 12.123123, undefined, null];

console.log(array);

console.log(array[0]);
console.log(array[2]);
console.log(array[3]);

for(let i=0; i<array.length; i++){
   console.log(`index${i} = ${array[i]}`);
}

console.log(array[-1]);

let arr = new Array(); //let arr= [] 

arr = new Array(3); //[undifined, undifined, undifined]
console.log(arr);