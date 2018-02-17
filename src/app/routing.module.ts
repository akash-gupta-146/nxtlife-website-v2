import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { StrategicPlanningComponent } from './strategic-planning/strategic-planning.component';
import { HomeComponent } from './home/home.component';
import { QualityAssuranceComponent } from './quality-assurance/quality-assurance.component';
import { LemComponent } from './lem/lem.component';
import { SemComponent } from './sem/sem.component';
import { RiskComponent } from './risk/risk.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full' },
  { path:'home', component:HomeComponent  },
  { path:'sp', component: StrategicPlanningComponent },
  { path:'qa', component: QualityAssuranceComponent },
  { path:'lem', component: LemComponent},
  { path:'sem', component: SemComponent},
  { path:'rm', component: RiskComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})


export class RoutingModule {
  
 }
