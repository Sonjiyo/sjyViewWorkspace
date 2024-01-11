//한줄 주석
console.log('test');
/*
여러줄 주석
자바랑 같음
*/

/*
변수 선언하기
자바 로컬 변수    vs    자바스크립트 변수

반드시 초기값 필요      초기값 없으면 undifined
변수에 자료형 존재      변수에 자료형 없음

기본형 타입
int, boolean, double..     let, const(final : 상수), var(안씀)
*/

let num; //int num = 10;
console.log(num);
num = 10;
console.log(num);
console.log(typeof num);
num = "test";
console.log(num);
num = true;
console.log(num);
num = 10.1234;
console.log(num);

const name = '박연미';
console.log(name);
// name = '오은영'; const 자바에서 키워드 final 동일하다
console.log(name);

//변수 이름 : naming cconventions : 네이밍 컨벤션

/*
naming cconventions

   변수이름 지을 때
   1) 일반적으로 영어(라틴문자)를 사용하여 문자와 숫자를 모두 사용할 수 있다.
   2) 특수기호는 언더스코어 _와 달러 $를 사용할 수 있다.
   3) 숫자로 이름을 시작할 수 없다.
   4) 키워드는 변수명으로 사용할 수 없다.
      var const = 'var';
*/

// let num = 10; 재정의 불가능

var number = 100;
var number = 10;
// var는 재정의 가능

age = 100; //let 키워드 생략 가능
console.log(age);

