import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NofoundComponent } from './nofound/nofound.component';
import { ParedesComponent } from './paredes/paredes.component';


const routes: Routes=[

  {path:'', component: MainComponent},
  {path:'pared', component: ParedesComponent},
  {path:'**', component: NofoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
