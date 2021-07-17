import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { Hoteles } from 'src/app/modelos/hoteles.model';
import Swal from 'sweetalert2';
import { Evento } from 'src/app/modelos/eventos.model';
import { Router } from '@angular/router';
import { Reservaciones } from 'src/app/modelos/reservaciones.model';
import { Habitaciones } from 'src/app/modelos/habitaciones.model';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  providers:[HotelesService],

})
export class HotelComponent implements OnInit {
  public hotelesList;
  public eventosList;
  public habitacionesList;
  public hotelesModel: Hoteles;
  public eventoModel: Evento;
  public habitacionModel: Habitaciones;
  public reservacionesModel: Reservaciones;
  hotel;
  constructor(private _hotelesService: HotelesService,private _router: Router) {
    this.hotelesModel = new Hoteles("","","","",0);
    this.eventoModel = new Evento("","", "","");
    this.reservacionesModel = new Reservaciones("","","",0,"","","")
    this.habitacionModel = new Habitaciones("","",0,"","","","")
   }

  ngOnInit(): void {
    this.mostrarHoteles();
    this.hotel = JSON.parse(localStorage.getItem('hotelesModel'))
  }

  mostrarHoteles(){
    this._hotelesService.mostrarHoteles().subscribe(
      response=>{
        console.log(response)
        this.hotelesList = response.hotelesEncontrados
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

  crearHotel(){
    this._hotelesService.crearHotel(this.hotelesModel).subscribe(
      response =>{
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'Hotel Agregado',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        this._router.navigate(['/hotel']);
      },
      error =>{
        console.log(<any>error)

      }
    )
  }

  buscarHotelId(id){
    this._hotelesService.obtenerHotel(id).subscribe(
      response=>{
        this.hotelesModel = response.hotelEncontrado;
        console.log(response.hotelEncontrado);

      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  editarHotel(){
    this._hotelesService.editarHotel(this.hotelesModel).subscribe(
      response=>{
        console.log(response);
        this.hotelesModel = response.hotelActualizado;
        this.mostrarHoteles();
        
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

  eliminarHotel(id){
    this._hotelesService.eliminarHotel(id).subscribe(
      response=>{
        console.log(response);
        this.mostrarHoteles();
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
        })
      }
    )
  }

   eventosHotel(id){
    this._hotelesService.mostrarEventos(id).subscribe(
      response=>{
        this.eventosList = response.eventoEncontrado;
        console.log(response.eventoEncontrado);
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
        })
      }
    )
  }

  crearEvento(id){
    this._hotelesService.crearEventoHotel(id, this.eventoModel).subscribe(
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

        this._router.navigate(['/hotel']);
      },
      error => {
        console.log(<any>error)
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          text: 'Cambia de parametros',
        })
      }
    )
  }


  habitacionesHotel(id){
    this._hotelesService.habitacionesHotel(id).subscribe(
      response => {
        this.habitacionesList = response.habitacionesEncontradas;
        console.log(response.habitacionesEncontradas)
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
        })
      }
    )
  }

  habitacionId(id){
    this._hotelesService.buscarHabitacionId(id).subscribe(
      response => {
        this.habitacionModel = response.habitacionEncontrada;
        console.log(response.habitacionEncontrada);
      },
      error=>{

      }
    )
  }

  reservacion(id){
    this._hotelesService.reservacion(id, this.reservacionesModel).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'Reservacion Agregado',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

        this._router.navigate(['/hotel']);
      },
      error => {
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
