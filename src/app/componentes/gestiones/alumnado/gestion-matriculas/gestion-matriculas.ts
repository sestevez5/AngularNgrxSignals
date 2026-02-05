import { Component, computed, effect, inject, Signal } from '@angular/core';
import { GestionAlumnadoStore } from '../../../../estados/gestionAlumnadoState'
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlumnadoService } from '../../../../servicios/alumnado-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatriculaItem } from "../matricula-item/matricula-item";

@Component({
  selector: 'app-gestion-matriculas',
  templateUrl: './gestion-matriculas.html',
  styleUrl: './gestion-matriculas.css',
  providers: [GestionAlumnadoStore],
  imports: [MatriculaItem]
})
export class GestionMatriculas {

  private readonly miServicio = inject(AlumnadoService);
  //public alumnado = toSignal(this.miServicio.getTodos(), { initialValue: [] });
  public valorToken: Signal<string | null> = this.miServicio.token;

  public x: any = this.miServicio.obtenerToken("12D62B94-65CF-42E1-8E52-94EDE131E483");




  readonly store = inject(GestionAlumnadoStore);

  constructor() {



    setTimeout(() => {
      this.miServicio.obtenerAlumnoPorCial('A96A41010G').subscribe(datos => console.log(datos))

    }, 1000);
  }



}