import { Component } from '@angular/core';

@Component({
  selector: 'app-main-com',
  templateUrl: './main-com.component.html',
  styleUrls: ['./main-com.component.css']
})
export class MainComComponent {
  pap_win(){
    this.t_match=this.t_match+1;
    this.h_win=this.h_win+2;
    this.m_lost=this.m_lost+1;
    this.l_img_url="assets/images/L_paper.jpg";
    this.r_img_url="assets/images/R_rock.jpg";
  }
  pap_draw(){
    this.t_match=this.t_match+1;
    this.h_draw=this.h_draw+1;
    this.m_draw=this.m_draw+1;
    this.l_img_url="assets/images/L_paper.jpg";
    this.r_img_url="assets/images/R_paper.jpg";

  }
  pap_loss(){
    this.t_match=this.t_match+1;
    this.m_win=this.m_win+2;
    this.h_lost=this.h_lost+1;
    this.l_img_url="assets/images/L_paper.jpg";
    this.r_img_url="assets/images/R_sci.jpg";

  }
  rock_win(){
    this.t_match=this.t_match+1;
    this.h_win=this.h_win+2;
    this.m_lost=this.m_lost+1;
    this.l_img_url="assets/images/L_rock.jpg";
    this.r_img_url="assets/images/R_sci.jpg";

  }
  rock_draw(){
    this.t_match=this.t_match+1;
    this.h_draw=this.h_draw+1;
    this.m_draw=this.m_draw+1;
    this.l_img_url="assets/images/L_rock.jpg";
    this.r_img_url="assets/images/R_rock.jpg";

  }
  rock_loss(){
    this.t_match=this.t_match+1;
    this.m_win=this.m_win+2;
    this.h_lost=this.h_lost+1;
    this.l_img_url="assets/images/L_rock.jpg";
    this.r_img_url="assets/images/R_paper.jpg";

  }
  sci_win(){
    this.t_match=this.t_match+1;
    this.h_win=this.h_win+2;
    this.m_lost=this.m_lost+1;
    this.l_img_url="assets/images/L_sci.jpg";
    this.r_img_url="assets/images/R_paper.jpg";

  }
  sci_draw(){
    this.t_match=this.t_match+1;
    this.h_draw=this.h_draw+1;
    this.m_draw=this.m_draw+1;
    this.l_img_url="assets/images/L_sci.jpg";
    this.r_img_url="assets/images/R_sci.jpg";

  }
  sci_loss(){
    this.t_match=this.t_match+1;
    this.m_win=this.m_win+2;
    this.h_lost=this.h_lost+1;
    this.l_img_url="assets/images/L_sci.jpg";
    this.r_img_url="assets/images/R_rock.jpg";

  }

  start_but:boolean=true;

  start_game(){

    this.start_but=true;
  }


user:number=0;
num:number=0;
res:number=0;

t_match:number=0;

h_win:number=0;
h_draw:number=0;
h_lost:number=0;

m_win:number=0;
m_draw:number=0;
m_lost:number=0;

overallwinner:string="";
human_res:string="";
machine_res:string="";

l_img_url:string="assets/images/L_paper.jpg"
r_img_url:string="assets/images/R_paper.jpg"

paper(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user=10;
  this.res=this.user+this.num;
  this.final_result(this.res);
}
rock(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user=20;
  this.res=this.user+this.num;
  this.final_result(this.res);
}
sci(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user=30;
  this.res=this.user+this.num;
  this.final_result(this.res);
}
final_result(a:number){
  if(this.t_match<5){

  switch(a){
    case 11:alert("Paper wins");
    this.pap_win();
    break;
    case 12:alert("Paper Loss");
    this.pap_loss();
    break;
    case 13:alert("Paper Draw");
    this.pap_draw();
    break;
    case 21:alert("Rock wins");
    this.rock_win();
    break;
    case 22:alert("Rock Loss");
    this.rock_loss();
    break;
    case 23:alert("Rock Draw");
    this.rock_draw();
    break;
    case 31:alert("Scissor wins");
    this.sci_win();
    break;
    case 32:alert("Scissor Loss");
    this.sci_loss();
    break;
    case 33:alert("Scissor Draw");
    this.sci_draw();
    break;
  }
}else{
  alert("MATCH OVER")
   this.start_but=false;
}
}
}
