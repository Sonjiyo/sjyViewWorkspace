//비교연산자
// == != > < >= <=

//자바랑 동일한 부분

let num = 10;
console.log(num == 10)
console.log(num != 10)
console.log(num > 10)
console.log(num < 10)
console.log(num >= 10)
console.log(num <= 10)

// 자바스크립트에만 있는 것 ===
console.log('-----------------------------')
console.log(num =='10'); //true : 값만 비교
console.log(num === '10') //false : 값과 타입을 같이 비교

console.log(true == 'true') // false

let result = 1;
console.log(result)

result = num++;
console.log(result, num)

result = num--;
console.log(result, num)

result = ++num;
console.log(result, num)

result = --num;
console.log(result, num)

//형변환

// + : 1) 산술연산자로써 더하기, 2) 연결연산자 3) 부호로써 +

number = '10'
console.log(number + 10) //1010
console.log(+number + 10); //20
console.log(typeof + number); //여기서 +는 부호로인식
console.log(-number)

let test = 10;
console.log(test+''+10);
console.log(typeof (test+''))

console.log(typeof test)
test = (1000).toString();
console.log(typeof test)
console.log(test+1000)
let test2 = (true).toString()
console.log(true == test2)

//숫자 => 문자
let num1 = num+''; //묵시적(암묵적) 형변환
num1 = num1.toString(); //명시적 형변환

//문자 => 숫자
let num2 = '10';
num2 = +num2; //문자 앞에다 부호 붙이기
num2 = num2*1; //자동 계산
num2 = parseInt('100');

//단축평가 : || 모든 비교연산자 중에 하나라도 참이면 참 => 한 개가 참이면 나머지는 비교하지 않고 건너뜀
         // && 모든 비교연산자 중에 하나라도 거짓이면 거짓 => 한 개가 거짓이면 나머지 비교하지 않고 건너뜀

//멈춘 시점에 있는 값만 출력
console.log(true || '박연미')
console.log(false || '박연미')

console.log(true && '박연미')
console.log(false && '박연미')