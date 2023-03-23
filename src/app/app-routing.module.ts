import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownComponent } from "./countdown/countdown.component";
import {SurpriseGuard} from "./surprise.guard";
import {EnterPointComponent} from "./enter-point/enter-point.component";


const routes: Routes = [
  { path: 'surprise', component: CountdownComponent, canActivate: [SurpriseGuard]},
  { path: '', component: EnterPointComponent },
  { path : '**', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
