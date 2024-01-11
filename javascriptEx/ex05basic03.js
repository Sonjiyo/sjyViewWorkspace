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
console.log(test2)