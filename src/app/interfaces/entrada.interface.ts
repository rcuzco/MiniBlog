export class Entrada
{
    titulo: string;
    etiquetas: string;
    url: string;
    cuerpo: string;
    fechaCreacion: string;

    public constructor(init?: Partial<Entrada>)
    {
        Object.assign(this, init);
    }
}
