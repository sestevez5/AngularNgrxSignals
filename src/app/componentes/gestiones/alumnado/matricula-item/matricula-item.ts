import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button'
import { AplicacionStore } from '../../../../estados/aplicacionState';

@Component({
  selector: 'app-matricula-item',
  imports: [Button],
  templateUrl: './matricula-item.html',
  styleUrl: './matricula-item.css',
})
export class MatriculaItem {

  storeAplicacion = inject(AplicacionStore)

}
