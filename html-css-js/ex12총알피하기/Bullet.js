export default class Bullet{
   constructor(){
      this.radius = 7;
      this.speed = 2;
      this.x; //총알의 시작점
      this.y;
      this.dx; //총알의 끝점
      this.dy;
      //캔버스 크기
      this.cwidth = 800;
      this.cheight = 400;
   }

   init(){
      //동서남북 4개의 방향에서 랜덤으로 총알이 나온다
      let location =parseInt(Math.random()*4);

      if(location==0){//총알이 캔버스 위에서 시작
         this.x = Math.random() * (this.cwidth - this.radius); // 0~799
         this.y = this.radius;
      } else if(location==1){//아래에서 시작
         this.x = Math.random() * (this.cwidth - this.radius);
         this.y = thit.cheight - this.radius;
      } else if(location==2){//왼쪽에서 시작
         this.x = this.radius;
         this.y = Math.random() * (this.cheight - this.radius);
      } else{//오른쪽에서 시작
         this.x = this.cwidth - this.radius;
         this.y = Math.random() * (this.cheight - this.radius);
      }
   }
}