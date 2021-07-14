import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.sass']
})
export class GetUsersComponent implements OnInit {
  form:FormGroup;
  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.registerForm();
  }
  registerForm(){
    this.form = new FormGroup({
      method: new FormControl(),
      data: new FormControl(),
      offset: new FormControl(),
      limit: new FormControl()
    })
  }

  onFormSubmit(){
    if(this.form.value['method']=="rfid"){
      this.service.getUserByRfid(this.form.value['data']).subscribe(data=>console.log(data));
    }else if(this.form.value['method']=="uid"){
      this.service.getUserByUid(this.form.value['data']).subscribe(data=>console.log(data));
    }else{
      this.service.getUsersByRange(this.form.value['offset'],this.form.value['limit']).subscribe(data=>console.log(data));
    }
  }
}
