import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryFormComponentComponent } from './components/primary-form-component/primary-form-component.component';
import { SecondaryFormComponentComponent } from './components/secondary-form-component/secondary-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryFormComponentComponent,
    SecondaryFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
