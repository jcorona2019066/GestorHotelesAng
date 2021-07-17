import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { EncuestasComponent } from './componentes/encuestas/encuestas.component';
//import { LoginComponent } from './componentes/login/login.component';
//import { RegistroComponent } from './componentes/registro/registro.component';
//import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { HotelComponent } from './componentes/hotel/hotel.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AdminHotelComponent } from './componentes/admin-hotel/admin-hotel.component';
import { NavbarAdminHotelComponent } from './componentes/navbar-admin-hotel/navbar-admin-hotel.component';
import { NavbarAdminAppComponent } from './componentes/navbar-admin-app/navbar-admin-app.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  { path: 'usuario', component: UsuarioComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'navbar-admin-hotel', component:NavbarAdminHotelComponent},
  { path: 'navbar-admin-app', component:NavbarAdminAppComponent},
  { path: 'registrar', component: RegistrarComponent },
  { path: 'admin-hotel', component: AdminHotelComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'eventos', component: EventosComponent },
  { path:'habitaciones', component:HabitacionesComponent},

  { path: '**', component: InicioComponent },  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
