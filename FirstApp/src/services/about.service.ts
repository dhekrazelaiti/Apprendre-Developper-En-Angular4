import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {

  info = {
    nom:"SUPINFO",
    email: "supinfo@supinfo.com",
    tel : 4367789
  }
  comments =[
   {date :new Date(), message:"SUPINFO"},
   {date :new Date(), message:"SUPINFO NICE"},
  ];
 
  addComments(c){
    c.date=new Date();
    this.comments.push(c);
  }
  getAllComments(){
    return this.comments;
  }
  getInfo(){
    return this.info;
  }
  

}
