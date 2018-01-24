import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { StrategicPlanningComponent } from './strategic-planning/strategic-planning.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path:'home', component:CarouselComponent  },
  { path:'sp', component: StrategicPlanningComponent }
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
