import { IPersona } from "../compartidos/IPersona";

export interface IAlumno extends IPersona {
    cial: string;
    nombreSentido: string;
    sexoSentido: string;

}