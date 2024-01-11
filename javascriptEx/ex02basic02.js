console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3); //자바는 정수/정수 => 정수 | js는 정수/정수 => 실수
console.log(10 % 3);
console.log(Math.pow(10,3)); //거듭제곱 10*10*10
console.log(10 ** 3);   //위와 동일

console.log(2 - 'test'); // NAN
console.log(10/0);   // Infinity : 자바에서는 에러
console.log(0/10);   // 0

//String의 종료 ""(쌍따옴표 : 더블쿼테이션) ''(홀따옴표 : 싱글쿼테이션) ``(백틱)

let intro = '박연미\n 입니다\\n';
console.log(intro);

intro = "'박연미' 입니다";
console.log(intro);

intro = '"박연미" 입니다';
console.log(intro);

// `` 스트링 템플릿을 만들 수 있다.
const name = "박연미";
const job = "강사";

intro = `저는 ${name} 입니다 직업은 ${job}입니다`;
console.log(intro);

//boolean 타입은 동일

let isDead = true;
console.log(isDead);
console.log(!isDead);
console.log(!!isDead);

// falsey value : 값으로 인식하지 않는 값

console.log(!!0); // 숫자 0 
console.log(!!""); // 문자 빈문자열 
console.log(!!null); //비어있는 주소값
console.log(!!undefined);
console.log(!!NaN);

// let cat = undefined;
//let cat과 동일

let cat = null; //비어있다는 건 null로 표시하기


// truthy value 

console.log(!!10); // 0 제외한 모든 숫자 
console.log(!!-10.123); // 음수도 동일
console.log(!!"test"); // 비어있지 않는 모든 문자 
console.log(!![]); //new Array();
console.log(!!{}); //new Object();
console.log(!!Infinity);

//symbol 타입 : 유일무이한 값
const num1 = '1';
const num2 = '1';

console.log(num1==num2); //true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1);
console.log(symbol2);
console.log(symbol1==symbol2); //false

//오브젝트 타입 -> java Map : key와 value로 이뤄져있다

let dog = {  //key : 단일값만 들어갈 수 있는데 웬만하면 String만 사용
               //(주의!! String은 js에서 원시값)
   name : '바둑이', //'name' = '바둑이'
   age : 4,         //10 : 4
   isOwner : true,   //true : ture

   10 : '십',
   undefined : '정의되지않는 값',
   null : '비어있는 값',
   //[] : '참조값은 key로 못쓴다'
}

dog = {name : '바둑이', age : 4, isOwner :true}; //그냥 쓰면 String 으로 자동 key값 인식한다

console.log(dog) //{ name: '바둑이', age: 4, isOwner: true }


//오브젝트 값(속성값) 접근 방법 2가지
console.log(dog.name);
// console.log(dog[name]); //error
console.log(dog['name']); //꼭 스트링으로 key값 넣어줘야 함

function getKeyValue(object, key){
   console.log(object[key]);
}
function getKeyValue2(object, key){
   console.log(object.key); //순수하게 key 속성값을 객체 안에서 찾는것 : 동적으로 바꿀 수 없음

   if(key=='age'){
      console.log(object.age);
   }
}

getKeyValue(dog, 'age');
getKeyValue(dog, 'isOwner');
getKeyValue(dog, 'name');

getKeyValue2(dog, 'age');

//객체 값 추가
dog['ownerName'] ='제임스';
console.log(dog.ownerName);

dog.ownerAge = 10;
console.log(dog);

delete dog.ownerAge;
console.log(dog);
delete dog['ownerName'];
console.log(dog);
