import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public identidad;
  public token;
  constructor(public _http: HttpClient) { 
    this.ruta = GLOBAL.url;
  }

  registro(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);

    return this._http.post(this.ruta + 'registrar', params, {headers: this.headersVariable})
    // `${this.ruta}registrar`
  }

  todosUsuarios(): Observable<any>{

    return this._http.get(this.ruta + 'todosUsuarios', {headers: this.headersVariable})
  }

  login(usuario, getToken = null): Observable<any>{
    if(getToken != null){
      usuario.getToken = getToken;
    }
    let params = JSON.stringify(usuario);

    return this._http.post(this.ruta + 'login', params, { headers: this.headersVariable });

  }

  obtenerIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != 'undefined'){
      this.identidad = identidad2;
    }else{
      this.identidad = null;
    }
    return this.identidad;
  }

  obtenerToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }

    return this.token;
  }


  editarUsuario(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())
     //this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarUsuario/' + usuario._id , params, { headers: headersToken })

  }

  obtenerUsuario(id:String): Observable<any>{
   
    return this._http.get(this.ruta + 'obtenerUsuarioId/' + id, {headers: this.headersVariable})
  }


  
  eliminarUsuario(id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.delete(this.ruta + 'eliminarUsuario/' + id, { headers: headersToken });
  }


}
