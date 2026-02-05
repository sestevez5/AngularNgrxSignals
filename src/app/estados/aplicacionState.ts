import { patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { IAlumno } from '../modelos/alumnado/IAlumno';
import { IFiltroAlumnado } from '../modelos/alumnado/IFiltroAlumnado';
import { computed, inject } from '@angular/core';
import { AlumnadoService } from '../servicios/alumnado-service';

type AplicacionState = {
    cargando: boolean;
    mensajeCarga: string | null;
    subsistemaActual: ISubsistema | null

};

const initialState: AplicacionState = {
    cargando: false,
    mensajeCarga: null,
    subsistemaActual: null
};

export const AplicacionStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withProps((store) => ({

    })),
    withMethods((store) => ({
        cambiarEstadoAplicacion: (_cargando: boolean, _mensajeCarga?: string) => {
            patchState(store, { cargando: _cargando, mensajeCarga: _mensajeCarga })
        }
    })),
    withHooks({
        onInit(store) {
            console.log("Iniciando AplicacionStore", store.cargando());

        }
    })


);

interface ISubsistemas {
    [key: string]: ISubsistema
}


interface ISubsistema {
    codigo: String;
    denominacionCorta: String;
    denominacionLarga: String;
}

const SUBSISTEMAS: ISubsistemas = {

    "ALU": {
        codigo: "ALU",
        denominacionCorta: "G. Alumnado",
        denominacionLarga: "Gestión del alumnado"
    }

}