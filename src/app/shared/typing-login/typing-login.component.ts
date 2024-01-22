import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypingGamingService } from 'src/app/services/typing-gaming.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'typing-login',
  templateUrl: './typing-login.component.html',
  styleUrls: ['./typing-login.component.scss']
})
export class TypingLoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private typingGamingService: TypingGamingService,
    private router:Router)
     {}

  public controleLogin: boolean = false;
  

  ngOnInit(): void {
    
  }

  public loginForm: FormGroup = this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  postData(loginForm:FormGroup) {
    console.log(loginForm.value)
    this.typingGamingService.userlogin(loginForm.value.username,loginForm.value.password)
    .pipe(first())
    .subscribe(
    data => {
      this.router.navigate(['/jogo-principal']);

      },
    error => {
      this.controleLogin = true;
    }
    );
    }
}
