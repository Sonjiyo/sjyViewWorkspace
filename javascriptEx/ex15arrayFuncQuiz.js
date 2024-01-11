let cat = {
   kind : '고양이',
   age : 5
}
let dog = {
   kind : '개',
   age : 4
}
let rabbit = {
   kind : '토끼',
   age : 0.5
}
let hamster = {
   kind : '햄스터',
   age : 1
}

let pets = [cat,dog,rabbit,hamster,cat];

// pets.forEach(obj => console.log(obj))

//동물의 kind가 개인 것을 찾아라
let result = pets.find(obj => obj.kind == '개');
console.log(result);


//동물의 kind가 고양이인 것만 빼서 배열로 만들기
result = pets.filter(obj => obj.kind != '고양이');
console.log(result);

//3. 총 동물의 평균 나이를 구해라
result = pets.reduce((p,n) => p + n.age,0)/pets.length;
console.log(result);


//4.동물 나이순으로 내림차순 정렬
let copy =[...pets];
copy.sort((a,b) => a.age>b.age ? -1 : 1);
console.log(copy);