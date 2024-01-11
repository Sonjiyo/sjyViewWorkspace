//while / for /  do while

let i = 1;
while(i<=10){
   console.log(i);
   i+=1;
}

i=100;
do{
   if(i==99) {
      i-=1;
      continue;
   }
   if(i==95) break;
   console.log(i)
   i-=1;
}while(i>90);

//for - in : key 출력하는 for문 : 배열에서 key는 index, 객체는 key값이 나옴
let array = [10,20,30,40,50,60] //array에 같은 타입을 쓰는 게 좋다

for(let i in array){ //index가 출력
   console.log(i)
}

console.log('-------------------------')

//for - of : iterable한 객체만 사용할 수 있다 : looping 할 수 있는 타입만 가능
//객체는 사용할 수 없고 배열만가능

for(let i of array){ //값이 출력
   console.log(i)
}

let dog={
   name : '바둑이',
   age : 5,
   owner : {name:'박연미'}
}

for(let key in dog){ //key값이 나옴
   console.log(`key = ${key} / value = ${dog[key]}`)
}
// for(let i of dog){ //에러
//    console.log(i)
// }
