import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomebannerComponent } from './components/homebanner/homebanner.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PartnerSliderComponent } from './components/partnerslider/partnerslider.component';
import { AppRoutingModule } from './app-routing.module';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { ScrollSpyModule } from 'ngx-scrollspy';
import {MatCardModule} from '@angular/material/card';
import { OurworkComponent } from './components/ourwork/ourwork.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { OurPhilosphyComponent } from './components/our-philosphy/our-philosphy.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { HeaderContactComponent } from './components/layout/header-contact/header-contact.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomebannerComponent,
    HomepageComponent,
    HeaderComponent,
    PartnerSliderComponent,
    OurservicesComponent,
    OurworkComponent,
    OurteamComponent,
    OurPhilosphyComponent,
    TestimonialsComponent,
    OurMissionComponent,
    HeaderContactComponent
  ],
  imports: [
    CarouselModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    NgbModule,
    MatMenuModule,
    MatDividerModule,
    FontAwesomeModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
