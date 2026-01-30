import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnadoService {

  SERVIDOR: string = "https://wwwpre.educacion.org/educacion/bussed/apieduca/v1";
  APIKEY: string = "12D62B94-65CF-42E1-8E52-94EDE131E483";
  token = signal<string | null>(null);



  private readonly http: HttpClient = inject(HttpClient);



  public obtenerToken(apiKey: string): Observable<any> {

    const url: string = 'SERVIDOR' + '/seguridad/autenticacion-por-aplicacion';

    const body: IBodySolicitudToken = {
      apiKey: apiKey
    }

    return this.http.post(url, body).pipe(
      map((res: any) => res["access_token"])
    )
  }





  public getTodos(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
  }

}

interface IBodySolicitudToken {
  apiKey: String;
}
