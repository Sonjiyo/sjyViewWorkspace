//배열의 함수들...

//배열 자체를 수정하는가? 새로운 배열을 만드는가

let fruit = ['바나나','딸기','사과','포도','샤인머스캣','사과']; //new Array()

console.log(fruit.length);
console.log(fruit.indexOf('사과',3));
console.log(fruit.includes('용과'));

//배열 자체를 수정

console.log(fruit.push('파인애플'));
console.log(fruit);

console.log(fruit.push('수박','멜론','망고'));
console.log(fruit);

console.log(fruit.push(['귤','감']));
console.log(fruit);

console.dir(fruit);

fruit.pop(); //마지막 값 리턴

//앞에다가 추가
fruit.unshift('용과')
console.log(fruit);
//앞에거 삭제
fruit.shift();
console.log(fruit);

//배열 자르기
//splice(시작인덱스, 개수)
fruit.splice(0,3)
console.log(fruit);
//두번째 인자값이 없으면 끝까지 삭제
fruit.splice(3);
console.log(fruit);

//새로운 배열을 만드는 함수

fruit = ['바나나','딸기','사과','포도','샤인머스캣'];

//배열 추가
let moreFruit = ['망고','용과']
// let newFruit = fruit.concat(moreFruit);
// console.log(newFruit)

// ...spread 연산자를 사용하면 쉽게 배열을 복사할 수 있다
newFruit = [...fruit, ...moreFruit];
console.log(newFruit)

console.log(newFruit.join()) // 바나나,딸기,사과,포도,샤인머스캣,망고,용과
console.log(newFruit.join('/')) // 바나나/딸기/사과/포도/샤인머스캣/망고/용과
console.log(newFruit.join(', ')) // 바나나, 딸기, 사과, 포도, 샤인머스캣, 망고, 용과

let numbers = [1,9,7,5,2,4]
let copyNumbers = [...numbers].sort();
console.log(copyNumbers)
console.log(numbers)
// copyNumbers = [...numbers].sort((a,b)=> a > b ?-1:1);
// console.log(copyNumbers)
copyNumbers.reverse();
console.log(copyNumbers)