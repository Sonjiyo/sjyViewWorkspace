class Game1To50{
   constructor(){
      this.nodeList = [];
      this.frontList = [];
      this.backList = [];
      this.gameNum = 1;
      this.recode = {min:0, sec:0, milSec:0, cnt:0};
      this.gameTime = '';
      this.gameBtn = document.querySelector('#start');
      this.container = document.querySelector('.container');
      this.timer = document.querySelector('.timer');
      this.interval = null;
      this.init();
      this.gamePlay();
   }
   init(){
      this.gameBtn.addEventListener('click', ()=>{
         this.timeRecode();
         this.gameBtn.style.display='none';
         document.querySelector('.timer').style.display='block';
         
         this.createNodeList();
         
         for(let i=1; i<=25; i++){
            let box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute("data-id", `${i}`);
            box.textContent = this.nodeList[i+24];
            this.backList.push(box);
         }
      })
      
   }
   timeRecode(){
      this.interval = setInterval(() => {
         this.recode.milSec+=1;
         if(this.recode.milSec>=100){
            this.recode.sec+=1;
            this.recode.milSec=0;
         }
         if(this.recode.sec>=60){
            this.recode.min+=1;
            this.recode.sec=0;
         }
         const min = this.recode.min<10 ? '0'+this.recode.min : this.recode.min;
         const sec = this.recode.sec<10 ? '0'+this.recode.sec :this.recode.sec;
         const milSec = this.recode.milSec<10 ? '0'+this.recode.milSec:this.recode.milSec;
         this.gameTime = `${min}:${sec}:${milSec}`;
         this.timer.textContent = this.gameTime;
      }, 10);
   }
   createNodeList(){
      while(true){
         if(this.nodeList.length>=25) break;
         let num = parseInt(Math.random()*25+1);
         this.nodeList.push(num);
         this.nodeList = this.nodeList.filter((el, index)=>this.nodeList.indexOf(el)===index);
      }
      while(true){
         if(this.nodeList.length>=50) break;
         let num = parseInt(Math.random()*25+26);
         this.nodeList.push(num);
         this.nodeList = this.nodeList.filter((el, index)=>this.nodeList.indexOf(el)===index);
      }
      let data = '';
      for(let i=1; i<=25; i++){
         data += `<div class="box" data-id="${i}">${this.nodeList[i-1]}</div>`;
      }
      this.container.innerHTML = data;
   }
   gamePlay(){
      this.container.addEventListener('click', e=>{
         if(e.target==e.currentTarget)return;
         if(e.target.textContent!=this.gameNum) {
            let boxs = [...document.querySelectorAll('.box')]; 
            let cur = boxs.find(b=>b.textContent==this.gameNum);
            cur.classList.add('on');
            setTimeout(() => {
               cur.classList.remove('on');
            }, 200);
            return;
         }
         if(this.gameNum>25){
            e.target.classList.remove('box');
            e.target.textContent='';
         }else{
            let id = e.target.getAttribute('data-id');
            let back = this.backList.find(b => b.getAttribute('data-id')==id);
            e.target.textContent = back.textContent;
         }
         this.gameNum++;
         if(this.gameNum>50){
            clearInterval(this.interval);
            this.container.innerHTML= `당신의 기록<br>${this.gameTime}`;
            this.timer.style.display='none';
            this.gameBtn.textContent='다시 시작'
            this.gameBtn.style.display='block';
            this.gameNum=1;
            this.recode.milSec=0;
            this.recode.sec=0;
            this.recode.min=0;
         }
      })
   }
}

const game = new Game1To50();