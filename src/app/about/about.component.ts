import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  userForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.createForm();

   }

   OnSubmit()
   {
     alert('ok');
   }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['',Validators.required],
      usercity: ['',Validators.maxLength(5)]
    })
  }

}
