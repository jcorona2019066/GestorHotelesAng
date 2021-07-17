import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { HotelComponent } from './componentes/hotel/hotel.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AdminHotelComponent } from './componentes/admin-hotel/admin-hotel.component';
import { NavbarAdminHotelComponent } from './componentes/navbar-admin-hotel/navbar-admin-hotel.component';
import { NavbarAdminAppComponent } from './componentes/navbar-admin-app/navbar-admin-app.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HotelComponent,
    LoginComponent,
    NavbarComponent,
    RegistrarComponent,
    InicioComponent,
    AdminHotelComponent,
    NavbarAdminHotelComponent,
    NavbarAdminAppComponent,
    PerfilComponent,
    EventosComponent,
    HabitacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
