import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/persists/user.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  form: FormGroup;

  constructor(private service: AppService) { 
  }

  ngOnInit(): void {
    this.registerForm()
  }

  registerForm() {
    this.form= new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      uid: new FormControl(),
      rfid: new FormControl(),
      role: new FormControl()

    })
  }

  onFormSubmit()  {
    var user = new User(this.form.value['name'],this.form.value['surname'],this.form.value['role'],this.form.value['rfid']);
    this.service.putUser(user).subscribe(user=>console.log(user));
  }
}
