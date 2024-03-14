import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// mis componentes
import { NavbarMaldjComponent } from './components/navbar-maldj/navbar-maldj.component';
import { ConvertidorMaldjComponent } from './components/convertidor-maldj/convertidor-maldj.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarMaldjComponent,
    ConvertidorMaldjComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
