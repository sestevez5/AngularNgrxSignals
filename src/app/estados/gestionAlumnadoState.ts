import { signalStore, withComputed, withState } from '@ngrx/signals';
import { IAlumno } from '../modelos/alumnado/IAlumno';
import { IFiltroAlumnado } from '../modelos/alumnado/IFiltroAlumnado';
import { computed } from '@angular/core';

type GestionAlumnadoState = {
    alumnado: IAlumno[];
    alumnoSeleccionado: IAlumno | null;
    cargando: boolean;
    filtro: { consulta: IFiltroAlumnado | null; orden: 'asc' | 'desc' }
};

const initialState: GestionAlumnadoState = {
    alumnado: [],
    cargando: false,
    alumnoSeleccionado: null,
    filtro: { consulta: null, orden: 'asc' },
};

export const GestionAlumnadoStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ alumnado }) => ({
        numeroAlumnos: computed(() => alumnado.length)
    }))
);