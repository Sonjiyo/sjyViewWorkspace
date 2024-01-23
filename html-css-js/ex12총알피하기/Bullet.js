class Bullet{
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
      this.color = "green";
   }

   init(px, py){
      //동서남북 4개의 방향에서 랜덤으로 총알이 나온다
      let location =parseInt(Math.random()*4);

      if(location==0){//총알이 캔버스 위에서 시작
         this.x = Math.random() * (this.cwidth - this.radius); // 0~799
         this.y = this.radius;
      } else if(location==1){//아래에서 시작
         this.x = Math.random() * (this.cwidth - this.radius);
         this.y = this.cheight - this.radius;
      } else if(location==2){//왼쪽에서 시작
         this.x = this.radius;
         this.y = Math.random() * (this.cheight - this.radius);
      } else{//오른쪽에서 시작
         this.x = this.cwidth - this.radius;
         this.y = Math.random() * (this.cheight - this.radius);
      }

      //render 기준으로 플레이어값 가져오기
      let dx = px - this.x;
      let dy = py - this.y;
      //공과 플레이어의 거리
      let c = Math.sqrt(dx*dx + dy*dy);
      //바로 플레이어 위치로 가면 플레이어가 즉사하기 때문에 조금씩 이동
      this.dx = dx / c;
      this.dy = dy / c;
   }

   update(px, py){
      this.x += this.dx * this.speed;
      this.y += this.dy * this.speed;

      //화면 밖으로 나갔을 때
      if(this.x < -this.radius || this.y < -this.radius || this.x>this.cwidth + this.radius || this.y > this.cheight + this.radius){
         this.init(px, py); //다시 현재 플레이어의 위치값으로 총알 장전
      }
   }

   render(ctx){
      ctx.beginPath();
               //시작 좌표    크기         0부터 동그라미
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
   }

   isCollision(px,py,size){
      //현재 플레이어와 총알거리값
      let pdx = this.x - px;
      let pdy = this.y - py;
      let pdc = pdx*pdx + pdy*pdy;

      return Math.pow(size + this.radius) > pdc;
      // if(Math.pow(size + this.radius) > pdc){
      //    console.log('충돌');
      //    return true;
      // } else{
      //    return false;
      // }

   }
}