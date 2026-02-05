import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GestionMatriculas } from "./componentes/gestiones/alumnado/gestion-matriculas/gestion-matriculas";
import { AlumnadoLista } from "./componentes/gestiones/alumnado/alumnado-lista/alumnado-lista";
import { AplicacionStore } from './estados/aplicacionState';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GestionMatriculas, AlumnadoLista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularNgrxSignals');
  readonly store = inject(AplicacionStore);
}
