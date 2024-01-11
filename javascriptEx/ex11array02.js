//코드를 DRY 하게 짜라
//D : don't  R : reapt   Y:yourself ==> 반복되는 코드는 함수로 만들어서 재사용해라

// for(let i =1; i<=5; i++){
//    console.log(i);
// }

// for(let i =6; i<=15; i++){
//    console.log(i);
// }

function printArray(a, b){
   if(isNaN(a - b)){
      console.log('숫자값을 넣어주세요');
      return;
   }
   let big = a>b ? a : b;
   let small = a>b ? b : a;

   let str = '';
   for(let i=small; i<=big; i++){
      str += i+' ';
   }
   console.log(str);
}

printArray(1,5);
printArray(6,15);
printArray(15,4);
printArray(1,'test');
