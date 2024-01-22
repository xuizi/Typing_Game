import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingHeaderComponent } from './typing-header/typing-header.component';
import { TypingLoginComponent } from './typing-login/typing-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypingCadastroComponent } from './typing-cadastro/typing-cadastro.component';
import { RouterModule } from '@angular/router';
import { TypingMainHeaderComponent } from './typing-main-header/typing-main-header.component';
import { TypingMainGameComponent } from './typing-main-game/typing-main-game.component';
import { TypingRankingComponent } from './typing-ranking/typing-ranking.component';
import { TypingRecoverPasswordComponent } from './typing-recover-password/typing-recover-password.component';
import { TypingMainGameDigitComponent } from './typing-main-game-digit/typing-main-game-digit.component';
// import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    TypingHeaderComponent,
    TypingLoginComponent,
    TypingCadastroComponent,
    TypingMainHeaderComponent,
    TypingMainGameComponent,
    TypingRankingComponent,
    TypingRecoverPasswordComponent,
    TypingMainGameDigitComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    TypingHeaderComponent,
    TypingLoginComponent,
    TypingCadastroComponent,
    TypingMainHeaderComponent,
    TypingMainGameComponent,
    TypingRankingComponent,
    TypingRecoverPasswordComponent,
    TypingMainGameDigitComponent
  ],
})
export class SharedModule { }
