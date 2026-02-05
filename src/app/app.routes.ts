import { Routes } from '@angular/router';
import { GestionMatriculas } from './componentes/gestiones/alumnado/gestion-matriculas/gestion-matriculas';
import { SubsistemaGestion } from './componentes/general/subsistema-gestion/subsistema-gestion'
import { GestionCentros } from './componentes/gestiones/centros/gestion-centros/gestion-centros';
import { Index } from './componentes/general/index';

export const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    {
        path: 'gestion', component: SubsistemaGestion, title: "gestion",
        children: [
            { path: 'matriculas', component: GestionMatriculas, title: "Matriculas" },
            { path: '', redirectTo: 'matriculas', pathMatch: 'prefix' }
        ]
    },
    { path: 'index', component: Index },

];
