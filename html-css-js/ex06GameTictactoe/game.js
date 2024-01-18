const $td = [...document.querySelectorAll('td')];
let isWin = false;


document.querySelector('#start').addEventListener('click', ()=>{
   event.target.style.display='none';
   game();
})
// 0 1 2
// 3 4 5
// 6 7 8

// 0 1 2
// 0 3 6
// 0 4 8
// 2 4 6
let cnt = 0;
let turn = 1;
function game(){
   $td.forEach(td=>{
      td.addEventListener('click', ()=>{
         if(cnt>=8){
            document.querySelector('.off').innerHTML = `게임 오버<br>무승부입니다.`;
            document.querySelector('.off').style.display='flex';
         }
         if(!!td.textContent) return;
         if(turn===1){
            td.classList.add('p1');
            td.textContent = 'O';
         }else{
            td.classList.add('p2');
            td.textContent = 'X';
         }
         win();
         if(isWin) {
            winMsg();
         }
         turn = turn==1 ? 2 : 1;
         cnt++;
      })
   })
}
function win(){
   for(let i=0; i<=6; i+=3){
      if($td[i].textContent=='') continue;
      if($td[i].textContent==$td[i+1].textContent && $td[i+1].textContent==$td[i+2].textContent){
         isWin = true;
         return;
      }
   }
   for(let i=0; i<=2; i++){
      if($td[i].textContent=='') continue;
      if($td[i].textContent==$td[i+3].textContent && $td[i+3].textContent==$td[i+6].textContent){
         isWin = true;
         return;
      }
   }
   if($td[0].textContent!='' && $td[0].textContent==$td[4].textContent && $td[4].textContent==$td[8].textContent){
      isWin = true;
      return;
   }
   if($td[2].textContent!='' && $td[2].textContent==$td[4].textContent && $td[4].textContent==$td[6].textContent){
      isWin = true;
      return;
   }
}
function winMsg(){
   let color = turn==1 ? 'pink' : 'blue';
   document.querySelector('.off').innerHTML = `게임 오버<br><span class="${color}">${color}</span>가 이겼습니다.`;
   document.querySelector('.off').style.display='flex';
}