import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowseComponent } from './browse/browse.component';
import { AngularSplitModule } from 'angular-split';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BrowseComponent,
    AngularSplitModule
  ],
  imports: [
    BrowserModule,
    routes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
