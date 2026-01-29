import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnadoService {
  private readonly http: HttpClient = inject(HttpClient);

  token: string | null = null;

  public obtenerToken(apiKey: string): Observable<any> {
    return this.http.post('https://wwwpre.educacion.org/educacion/bussed/apieduca/v1/seguridad/autenticacion-por-aplicacion', { apiKey: "12D62B94-65CF-42E1-8E52-94EDE131E483" })
  }

  public getTodos(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
  }

}
