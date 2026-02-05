import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IAlumno } from '../modelos/alumnado/IAlumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnadoService {

  SERVIDOR: string = "https://wwwpre.educacion.org/educacion/bussed/apieduca/v1";
  APIKEY: string = "12D62B94-65CF-42E1-8E52-94EDE131E483";
  token = signal<string>('');
  private readonly http: HttpClient = inject(HttpClient);

  public obtenerToken(_apiKey: string): void {

    const url: string = this.SERVIDOR + '/seguridad/autenticacion-por-aplicacion';

    const body: IBodySolicitudToken = {
      apiKey: _apiKey
    }

    this.http.post(url, body).pipe(
      map((res: any) => res["access_token"])
    ).subscribe(token => {
      this.token.update(value => token);

    })
  }

  public obtenerAlumnoPorCial(_cial: string): Observable<IAlumno | null> {

    const headers = new HttpHeaders(
      { 'Authorization': 'Bearer ' + this.token() }
    )

    const url: string = this.SERVIDOR + '/directorio-alumnado/alumnado/' + _cial;
    return this.http.get<IAlumno | null>(url, { observe: 'response', headers })
      .pipe(
        tap((respuesta: any) => console.log(respuesta)),
        map((respuesta: any) => {
          if (respuesta.status === 200 && respuesta.datos) {
            const datos = respuesta.datos;
            const iAlumno: IAlumno = {
              cial: datos.cial,
              nombre: datos.nombre,
              primerApellido: datos.primerApellido,
              segundoApellido: datos.segundoApellido,
              nifNie: datos.nifNie,
              sexo: datos.sexo,
              nombreSentido: datos.nombreSentido,
              sexoSentido: datos.sexoSentido
            };
            return iAlumno
          } else
            return null;
        }
        )  // fin map
      ) // fin pipe
  }


}


interface IBodySolicitudToken {
  apiKey: string;
}


