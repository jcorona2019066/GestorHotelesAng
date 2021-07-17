import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [UsuarioService]
})
export class PerfilComponent implements OnInit {
  public usuariosList;

  public usuarioIDModel: Usuario;
  constructor(private _usuarioService: UsuarioService,) {
    this.usuarioIDModel = new Usuario('','','','','', 0 ,'','','','','');
  }

  ngOnInit(): void {
    
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

  



}
