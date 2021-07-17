import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { Evento } from 'src/app/modelos/eventos.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  providers: [HotelesService]
})
export class EventosComponent implements OnInit {
  public eventosList
  public eventoModel: Evento
  constructor(public _hotelesService: HotelesService) {
    this.eventoModel = new Evento("","", "","");
  }

  ngOnInit(): void {
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

}
