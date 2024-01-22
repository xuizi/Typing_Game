import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  constructor(private formBuilder:FormBuilder) {}

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['',Validators.required], // Validando nome
    lastName: ['',Validators.required], // Validando sobrenome
    email: ['',[Validators.required,Validators.email]], // Validando campo de email
    password: ['',Validators.required], // Validando campo de senha
  })

}
