import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/persists/user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit {
  form:FormGroup;
  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.registerForm();
  }
  registerForm(){
    this.form = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      uid: new FormControl(),
      role: new FormControl(),
      rfid: new FormControl(),
    })
  }
  onFormSubmit(){
    var userToUpdate = new User(this.form.value['name'],
      this.form.value['surname'],
      this.form.value['role'],
      this.form.value['rfid'],
      this.form.value['uid']);
    this.service.updateUserByUid(this.form.value['uid'],userToUpdate);
  }
}
