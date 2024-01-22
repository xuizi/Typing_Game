import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MainGameComponent } from './main-game/main-game.component';
import { RankingComponent } from './ranking/ranking.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { validarGuard } from '../shared/guards/validar.guard';
import { TypingMainGameDigitComponent } from '../shared/typing-main-game-digit/typing-main-game-digit.component';
import { MainGameDigitacaoComponent } from './main-game-digitacao/main-game-digitacao.component';



const routes: Routes = [
  {path:'',
    component:HomeComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'jogo-principal',component:MainGameComponent,canActivate: [validarGuard]},
  {path:'ranking',component:RankingComponent,canActivate: [validarGuard]},
  {path:'recuperar-senha',component:RecoverPasswordComponent},
  {path:'jogo-principal-digitacao',component:MainGameDigitacaoComponent,canActivate: [validarGuard]},
  {path:'**',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }