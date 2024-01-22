import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TypingGamingService } from 'src/app/services/typing-gaming.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'typing-cadastro',
  templateUrl: './typing-cadastro.component.html',
  styleUrls: ['./typing-cadastro.component.scss']
})
export class TypingCadastroComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
              private typingGamingService: TypingGamingService,
              private router:Router) {

  }
  
  ngOnInit(): void {
    
  }

  public cadastroForm: FormGroup = this.formBuilder.group({
    username:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
  })

  public controleSenhas: boolean = false;

  postData(cadastroForm:FormGroup) {
    if (cadastroForm.value.password !== cadastroForm.value.confirmPassword) {
        this.controleSenhas = true
    }
    else {
      this.typingGamingService.userregistration(cadastroForm.value.username,cadastroForm.value.email,cadastroForm.value.password,cadastroForm.value.confirmPassword)
      .pipe(first())
      .subscribe(
      data => {
      this.router.navigate(['/']);
      },
      
      error => {
      });
      }
    }
   

}





