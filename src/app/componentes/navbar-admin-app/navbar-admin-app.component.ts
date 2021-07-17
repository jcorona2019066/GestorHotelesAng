import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-navbar-admin-app',
  templateUrl: './navbar-admin-app.component.html',
  styleUrls: ['./navbar-admin-app.component.scss'],
  providers: [UsuarioService]
})
export class NavbarAdminAppComponent implements OnInit {
  public identidad;
  constructor(
    public _usuarioService: UsuarioService
  ) { 
    this.identidad = this._usuarioService.obtenerIdentidad();
   }

  ngOnInit(): void {
    console.log(this.identidad);
  }
}
