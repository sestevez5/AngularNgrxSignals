import { Component, inject } from '@angular/core';
import { GestionAlumnadoStore } from '../../../../estados/gestionAlumnadoState'
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlumnadoService } from '../../../../servicios/alumnado-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-gestion-matriculas',
  imports: [JsonPipe],
  templateUrl: './gestion-matriculas.html',
  styleUrl: './gestion-matriculas.css',
  providers: [GestionAlumnadoStore]
})
export class GestionMatriculas {

  private readonly miServicio = inject(AlumnadoService);
  public alumnado = toSignal(this.miServicio.getTodos(), { initialValue: [] });

  public x: any = this.miServicio.obtenerToken('{"apiKey":"2847789123741274967497812"}').subscribe(x => console.log(x))


  readonly store = inject(GestionAlumnadoStore);


}