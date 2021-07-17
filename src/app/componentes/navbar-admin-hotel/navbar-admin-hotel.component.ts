import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-navbar-admin-hotel',
  templateUrl: './navbar-admin-hotel.component.html',
  styleUrls: ['./navbar-admin-hotel.component.scss'],
  providers: [UsuarioService]
})
export class NavbarAdminHotelComponent implements OnInit {
  public identidad;
  constructor(
    public _usuarioService: UsuarioService
  ) { 
    this.identidad = this._usuarioService.obtenerIdentidad();
   }

  ngOnInit(): void {
    console.log(this.identidad);
  }

  CerrarSesion(){
    localStorage.clear()
  }

}
