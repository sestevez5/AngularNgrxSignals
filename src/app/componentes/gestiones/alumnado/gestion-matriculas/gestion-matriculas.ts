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

  public x: any = this.miServicio.obtenerToken("12D62B94-65CF-42E1-8E52-94EDE131E483").subscribe(x => console.log('Valor de x: ', x))


  readonly store = inject(GestionAlumnadoStore);


}