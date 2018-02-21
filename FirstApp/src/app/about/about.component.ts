import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 info = {
   nom:"SUPINFO",
   email: "supinfo@supinfo.com",
   tel : 4367789
 }
 comments =[
  {date :new Date(), message:"Welcome to SUPINFO"},
  {date :new Date(), message:"Welcome to SUPINFO Campus Nice"},
 ];
 commentaire = {date:null, message:""};
  constructor() { }

  ngOnInit() {
  }
  onAddCommentaire(c) {
    c.date=new Date();
    this.comments.push(c);
    //this.commentaire=(c);
    this.commentaire.message="";
    
    console.log(c);
  }

}
