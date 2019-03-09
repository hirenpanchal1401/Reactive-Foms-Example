import { Component, OnInit } from '@angular/core';
import {IUser} from '../Models/iuser.modal';
import {DemoService} from '../Shared/demo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user:IUser = new IUser();

  constructor(private ds:DemoService) { }

  ngOnInit() {
  }

  OnSubmit()
  {
    if(this.user.uname!=null && this.user.ucity!=null){
    console.log(this.user);
    this.ds.username;
    }
    else{
      alert("please enter proper user info...");
    }
  }

}
