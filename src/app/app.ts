import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GestionMatriculas } from "./componentes/gestiones/alumnado/gestion-matriculas/gestion-matriculas";
import { AlumnadoLista } from "./componentes/gestiones/alumnado/alumnado-lista/alumnado-lista";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GestionMatriculas, AlumnadoLista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularNgrxSignals');
}
