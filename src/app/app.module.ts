import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StrategicPlanningComponent } from './strategic-planning/strategic-planning.component';
import { RoutingModule } from './/routing.module';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NxtlifeServicesComponent } from './nxtlife-services/nxtlife-services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    StrategicPlanningComponent,
    ProductsComponent,
    HomeComponent,
    NxtlifeServicesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
