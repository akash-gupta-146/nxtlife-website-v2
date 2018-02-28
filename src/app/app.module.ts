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
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { LeftImageComponent } from './left-image/left-image.component';
import { RightImageComponent } from './right-image/right-image.component';
import { DualListComponent } from './dual-list/dual-list.component';
import { QualityAssuranceComponent } from './quality-assurance/quality-assurance.component';
import { FabTitle } from './fab-title/fab-title.component';
import { LemComponent } from './lem/lem.component';
import { FooterComponent } from './footer/footer.component';
import { SemComponent } from './sem/sem.component';
import { RiskComponent } from './risk/risk.component';
import { ProductThemeComponent } from './product-theme/product-theme.component';
import { QualityAssuranceService } from './app-services/quality-assurance.service';
import { HeaderService } from './app-services/header/header.service';
import { StrategicPlanningService } from './app-services/strategic-planning.service';
import { LemService } from './app-services/lem.service';

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
    BlockHeadingComponent,
    ScreenshotsComponent,
    LeftImageComponent,
    RightImageComponent,
    DualListComponent,
    QualityAssuranceComponent,
    FabTitle,
    LemComponent,
    FooterComponent,
    SemComponent,
    RiskComponent,
    ProductThemeComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaq46VJQf5eWFf2RAZQLUzA_YzMDA1tQA'
    })
  ],
  providers: [
    QualityAssuranceService,
    HeaderService,
    StrategicPlanningService,
    LemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
