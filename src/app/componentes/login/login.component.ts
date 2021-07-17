import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuario.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuario
  public token;
  public identidad;
  constructor(public _usuarioService: UsuarioService, public _router: Router) {
    this.usuarioModel = new Usuario('','','','','', 0 ,'','','','','');
  }

  ngOnInit(): void {
  }
  

  obtenerToken(){
    this._usuarioService.login(this.usuarioModel, 'true').subscribe(
      response=>{
        console.log(response);
        this.token = response.token;
        localStorage.setItem('token', this.token);
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  login(){
    this._usuarioService.login(this.usuarioModel).subscribe(
      response=>{
        this.identidad = response.usuarioEncontrado;
        localStorage.setItem('identidad', JSON.stringify(this.identidad))
        this.obtenerToken();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El usuario ingreso correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        if(this.identidad.rol == "ADMINHOTEL"){
          this._router.navigate(['/admin-hotel'])
        }else if(this.identidad.rol =="Usuario"){
          this._router.navigate(['/usuario'])
        }else{
          this._router.navigate(['/ADMINAPP'])
        }

      },
      error=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }


}
