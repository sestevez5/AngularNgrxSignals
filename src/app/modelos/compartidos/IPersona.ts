import { EnumSexo } from "./EnumSexo";

export interface IPersona {
    primerApellido: string;
    segundoApellido: string;
    nombre: string;
    nifNie: string;
    sexo: EnumSexo;
}