let $itemList = [...document.querySelectorAll('.item_row')];
let $removeBtn = [...document.querySelectorAll('.item_delete')];
let itemNum = 1;

function addItem(){
   const text = document.querySelector('.footer_input').value;

   if(!text.trim()){
      alert('값을 입력해주세요.');
      document.querySelector('.footer_input').value = null;
      return;
   }
   if(itemNum>1){
      let $itemName = [...document.querySelectorAll('.item_name')];
      if($itemName.find(item => item.textContent==text)){
         alert('이미 있는 값입니다.')
         document.querySelector('.footer_input').value = null;
         return;
      }
   }

   let isClick = false;
   document.querySelector('p').addEventListener('click', ()=>{
      if(!isClick){
         for(let btn of $removeBtn){
            btn.style.display='block';
         }
         document.querySelector('p').textContent='삭제 버튼 제거';
      } else{
         for(let btn of $removeBtn){
            btn.style.display='none';
         }
         document.querySelector('p').textContent='삭제 버튼 생성';
      }
      isClick = !isClick;
   });

   //element.setAttribute('data-myData','이름');
   document.querySelector('.items').innerHTML += `
   <li class="item_row" data-id="${itemNum}">
            <div class="item">
            <span class="item_name">${text}</span>
            <button class="item_delete" data-id="${itemNum++}"> <i class="fa-solid fa-trash-can" ></i> </button>
            </div>
   </li>`;
   document.querySelector('.footer_input').value = null;
   $itemList = [...document.querySelectorAll('.item_row')];
   $removeBtn = [...document.querySelectorAll('.item_delete')];
   for(let btn of $removeBtn){
      btn.addEventListener('click', ()=>{
         removeItem(btn);
      })
   }
}

document.querySelector('.msg_btn').addEventListener('click', ()=>{
   addItem();
});
document.querySelector('.footer_btn').addEventListener('click', ()=>{
   document.querySelector('.items').innerHTML = null;
});

document.querySelector('.footer_input').addEventListener('keyup',()=>{
   // if(event.isComposing )return; //한글 입력 시 두번 이벤트 처리되는 것을 막음
   // if(event.code==='Enter'){
   //    addItem();
   // }
   if (event.key == 'Enter') {
      addItem();
   }
})

function removeItem(btn){
   let id = btn.dataset.id;
   // console.log(btn.getAttribute('data-id')); =>아이디값 불러오는 다른 방법
   let item = $itemList.find(item => item.dataset.id == id);
   item.remove();
}

// function deleteItem(id) {
//    const delItem = document.querySelector(`.item_row[data-id='${id}']`);
//    delItem.remove();
//  }

// items.addEventListener('click', (event) => {
//    let id = event.target.getAttribute('data-id');
//    if (!id) {
//      // path / svg 선택했을때 path로 잡히면 그것에 부모인 svg(data-id) 선택
//      id = event.target.parentElement.getAttribute('data-id');
//      // 아이템을 선택했을시는 삭제 안되게 막아줌 
//      if (event.target.parentElement.classList.value === 'item_row') return;
//      // console.log(id);
//      // console.log("test1=", event.target);
//      // console.log("test2=", event.target.parentElement);
//    }
//    id && deleteItem(id);
//    // console.log(event.currentTarget);
//  })