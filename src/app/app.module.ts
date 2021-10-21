import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { CityfilterPipe } from './cityfilter.pipe';
import { PostfilterPipe } from './postfilter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    SearchComponent,
    HomeComponent,
    FilterComponent,
    FilterPipe,
    CityfilterPipe,
    PostfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
