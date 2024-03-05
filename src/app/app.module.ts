import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps'
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { ServicesComponent } from './main/services/services.component';
import { WorkComponent } from './main/work/work.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import {NgClickOutsideDirective} from 'ng-click-outside2';
import { ScrollSpyModule } from 'ng-spy';
import { FamilleComponent } from './main/famille/famille.component';
import { LivresComponent } from './main/livres/livres.component';
import { EvenementsComponent } from './main/evenements/evenements.component';
import { MediasComponent } from './main/medias/medias.component';
import { VideosComponent } from './main/medias/videos/videos.component';
import { ChansonsComponent } from './main/medias/chansons/chansons.component';
import { DocumentsComponent } from './main/medias/documents/documents.component';
import { PhotosComponent } from './main/medias/photos/photos.component';
import { MembresComponent } from './main/membres/membres.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ServicesComponent,
    WorkComponent,
    TestimonialsComponent,
    BlogComponent,
    ContactComponent,
    FamilleComponent,
    LivresComponent,
    EvenementsComponent,
    MediasComponent,
    VideosComponent,
    ChansonsComponent,
    DocumentsComponent,
    PhotosComponent,
    MembresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    ScrollSpyModule,
    NgClickOutsideDirective,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
