import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import {Hoteles} from '../modelos/hoteles.model'
import { Evento } from '../modelos/eventos.model';
import { Habitaciones } from '../modelos/habitaciones.model';
import { Reservaciones } from '../modelos/reservaciones.model';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public identidad;
  public token;
  constructor(public _http: HttpClient) { 
    this.ruta = GLOBAL.url;
  }


  mostrarHoteles(): Observable<any>{

    return this._http.get(this.ruta + 'mostrarHoteles', {headers: this.headersVariable})
  }


  obtenerHotel(id:String): Observable<any>{
   
    return this._http.get(this.ruta + 'buscarHotelId/' + id, {headers: this.headersVariable})
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
  

  editarHotel(hotel: Hoteles): Observable<any>{
    let params = JSON.stringify(hotel);

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())
     //this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarHotel/' + hotel._id , params, { headers: headersToken })

  }

  mostrarEventos(idHotel:String): Observable<any>{

    return this._http.get(this.ruta + 'eventosHoteles/' + idHotel, {headers: this.headersVariable})
  }

  crearEventoHotel(idHotel,evento:Evento): Observable<any>{
    let params = JSON.stringify(evento)
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.post(this.ruta + 'crearEvento/' + idHotel, params, {headers: headersToken})
  }

  eliminarHotel(idHotel: String): Observable<any>{
    return this._http.delete(this.ruta + 'eliminarHotel/' + idHotel, {headers: this.headersVariable})
  }

  crearHotel(hotel: Hoteles): Observable<any>{
    let params = JSON.stringify(hotel);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.post(this.ruta + 'crearHotel', params, {headers: headersToken})
  }

  habitacionesHotel(idHotel: String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.get(this.ruta + 'habitacionesHotel/'+ idHotel, {headers: headersToken})
  }

  buscarHabitacionId(idHabitacion: String): Observable<any>{
    
    return this._http.get(this.ruta + 'habitacionId/'+ idHabitacion, {headers: this.headersVariable})
  }

  reservacion(idHabitacion: String, reservacion: Reservaciones): Observable<any>{
    let params = JSON.stringify(reservacion);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.post(this.ruta + 'reservacion/'+ idHabitacion,params, {headers: headersToken})
  }



}
