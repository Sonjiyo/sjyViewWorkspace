
//const 하는 것은 상수이지만
//참조변수가 상수면 새로운 주소값으로 변경은 불가능하지만 안에 있는 값을 변경 가능
//리터럴 객체
const dog = {
   name : '바둑이',
   age : 3
}

console.log(dog)

// 얕은 복사 : 주소값 복사
const otherDog = dog;
otherDog.ownerAge ={name : '제임스', age:34};

console.log(dog);
console.log(otherDog);

// 깊은 복사
const anotherDog = {...dog};
anotherDog.name = '흰둥이';
anotherDog.ownerAge.name = '존';

console.log(dog);
console.log(anotherDog);


