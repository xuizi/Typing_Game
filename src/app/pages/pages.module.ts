import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainGameComponent } from './main-game/main-game.component';
import { RankingComponent } from './ranking/ranking.component';
import {HttpClientModule} from '@angular/common/http';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { MainGameDigitacaoComponent } from './main-game-digitacao/main-game-digitacao.component';



@NgModule({
  declarations: [
    HomeComponent,
    CadastroComponent,
    MainGameComponent,
    RankingComponent,
    RecoverPasswordComponent,
    MainGameDigitacaoComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ]
})
export class PagesModule { }
