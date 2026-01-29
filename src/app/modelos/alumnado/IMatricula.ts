import { IAlumno } from "./IAlumno";

export interface IMatricula {
    fechaMatricula: Date;
    fechaBajaMatricula: Date;
    alumno: IAlumno;


}