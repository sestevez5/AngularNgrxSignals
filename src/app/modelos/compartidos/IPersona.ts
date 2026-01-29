import { EnumSexo } from "./EnumSexo";

export interface IPersona {
    primerApellid: string;
    segundoApellido: string;
    nombre: string;
    nifnie: string;
    sexo: EnumSexo;
}