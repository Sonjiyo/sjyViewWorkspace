
//호이스팅이 먼저 실행

//모든 변수 선언문이 코드 최상단으로 이동한 것처럼 느껴지게 js동작을 한다

console.log(name);
var name = '박연미';
console.log(name);

sayHi();

function sayHi(){
   console.log('hello')
}


//let 과 const 도 똑같이 호이스팅이 되지만 선언 전에 출력하면 undefined 가 뜨는게 아니라 에러를 띄워준다, var는 그냥 실행
console.log(dog)
let dog = '바둑이';

//let const  vs  var

//var -> 함수 스코프 영역 가지고, 변수 선언 전에 출력 가능 -> undefined 출력
//let, const -> 블록스코프영역, 변수 선언 전에 출력 불가능 -> 에러발생

var i = 99;
for(var i =1; i<10; i++){}
console.log(i);

//global 스코프 영역
let i = 99;
for(let i=1; i<10; i++){
   //local 스코프 영역
}
console.log(i);