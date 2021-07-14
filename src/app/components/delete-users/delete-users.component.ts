import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.sass']
})
export class DeleteUsersComponent implements OnInit {
  form:FormGroup;
  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.registerForm();
  }
  registerForm(){
    this.form = new FormGroup({
      uid: new FormControl()
    })
  }
  onFormSubmit(){
    this.service.deletUserByUid(this.form.value['delete']).subscribe(data=>console.log(data));
  }
}
