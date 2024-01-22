import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder) {} // Injetando meu FormBuilder na minha classe

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['',[Validators.required,Validators.email]], // Validando meus campos
    password: ['',Validators.required], // Validando meus campos
})

}
