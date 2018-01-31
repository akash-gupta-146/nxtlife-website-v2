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
import { AgmCoreModule } from '@agm/core';
import { BlockHeadingComponent } from './block-heading/block-heading.component';

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
    ContactComponent,
    BlockHeadingComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaq46VJQf5eWFf2RAZQLUzA_YzMDA1tQA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
