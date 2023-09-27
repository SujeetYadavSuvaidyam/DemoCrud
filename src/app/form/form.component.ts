import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  // data: any = {
  //   name: "",
  //   email: "",
  //   password: ''
  // }
  // Name(name: any) {
  //   this.data.name = name;
  // }
  // Password(password: any) {
  //   this.data.password = password;
  // }
  // Email(email: any) {
  //   this.data.email = email;
  // }
  // dataStore: any[] = []
  // Register(data: any) {
  //   var name = data.controls.name.value
  //   var email = data.controls.email.value
  //   var password = data.controls.password.value
  //   let person: any = {
  //     name: name,
  //     email: email,
  //     password: password,
  //   }
  //   this.dataStore.push(person)
  //   console.log(this.dataStore)
  // }
  singnupForm: any = FormGroup;
  index: number = -1
  FirstName: any = '';
  Email: string = '';
  Password: string = '';
  data: any = []
  constructor(private frmbulider: FormBuilder) {
    this.singnupForm = frmbulider.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+'), Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  PostData(singnupForm: NgForm) {
    this.data.push({
      name: this.singnupForm.controls.name.value,
      email: this.singnupForm.controls.email.value,
      password: this.singnupForm.controls.password.value
    })
    // console.log(this.data);
    this.singnupForm.reset()
  };



  FillDAta() {
    this.singnupForm.patchValue({
      "name": "sujeet",
      "email": "sujeet@gmail.com",
      "password": "sujeet4321"
    })
  }
  Update(i: number) {

    // console.log(this.toogle)

    this.index = i;

    this.singnupForm.patchValue(this.data[i]);

  }

  //

  UpdateValue(singnupForm: any) {

    this.data[this.index] = this.singnupForm.value;

    this.index = -1;

    console.log("update Suceesfully")

    this.singnupForm.reset();

  }
  Delete(index: any) {
    this.data.splice(index, 1)
  }
}
