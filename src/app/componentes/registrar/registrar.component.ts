import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuario.model';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  providers: [UsuarioService],
})
export class RegistrarComponent implements OnInit {
  public usuarioModel: Usuario;
  constructor(private _usuarioService: UsuarioService,private _router: Router) { 
    this.usuarioModel = new Usuario ('','','','','', 0 ,'','','','','');
  }
  

  ngOnInit(): void {
  }

  registrar(){
    this._usuarioService.registro(this.usuarioModel).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'Usuario Agregado',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

        this._router.navigate(['/login']);
      },
      error=> {
        console.log(<any>error)
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          text: 'Cambia de parametros',
        })
      }
    )
  }

}
