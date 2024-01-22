import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypingGamingService } from 'src/app/services/typing-gaming.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'typing-recover-password',
  templateUrl: './typing-recover-password.component.html',
  styleUrls: ['./typing-recover-password.component.scss']
})
export class TypingRecoverPasswordComponent {

  constructor(private formBuilder:FormBuilder,
    private typingGamingService: TypingGamingService,
    private router:Router) {

}

public controleRecovery: boolean = false;

ngOnInit(): void {

}

public recuperarSenhaForm: FormGroup = this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
})

postData(cadastroForm:FormGroup) {
  this.typingGamingService.updatePassword(cadastroForm.value.username,cadastroForm.value.password,cadastroForm.value.confirmPassword)
  .pipe(first())
  .subscribe(
    data => {
      this.router.navigate(['/']);
    },
    error => {
      if (error.status === 404) {
        this.controleRecovery = true;
      } else {
      }
    }
  );

}

}
