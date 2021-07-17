import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {
  public usuariosList;

  public usuarioIDModel: Usuario;
  constructor(private _usuarioService: UsuarioService) { 
    this.usuarioIDModel = new Usuario('','','','','', 0 ,'','','','','');
  }

  ngOnInit(): void {
    this.todosUsuarios();
  }

  todosUsuarios(){
    this._usuarioService.todosUsuarios().subscribe(
      response=>{
        console.log(response);
        this.usuariosList = response.usuariosEncontrados;
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  obtenerUsuarioId(id){
      this._usuarioService.obtenerUsuario(id).subscribe(
        response=>{
          this.usuarioIDModel = response.usuarioEncontrado;
          console.log(response.usuarioEncontrado);

        },
        error=>{
          console.log(<any>error);
        }
      )
  }

  editarUsuario(){
    this._usuarioService.editarUsuario(this.usuarioIDModel).subscribe(
      response=>{
        console.log(response);
        this.usuarioIDModel = response.usuarioActualizado;
        this.todosUsuarios();
        
      },
      error=>{
        console.log(<any>error)
        Swal.fire({
          icon: 'error',
          title: "No puede modificar este usuario",
          text: 'Cambia de rol',
        })
      } 
    )
  }


  eliminarUsuario(id){
    this._usuarioService.eliminarUsuario(id).subscribe(
      response=>{
        console.log(response);
        this.todosUsuarios();
      },
      error=>{
        console.log(<any>error)
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          text: 'Cambia de rol',
        })
      } 
    )
  }

  



}
