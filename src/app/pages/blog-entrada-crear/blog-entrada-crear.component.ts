import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Entrada } from '../../interfaces/entrada.interface';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-blog-entrada-crear',
    templateUrl: './blog-entrada-crear.component.html',
    styleUrls: ['./blog-entrada-crear.component.css']
})
export class BlogEntradaCrearComponent implements OnInit
{
    env = environment;
    frmPublicar: FormGroup;
    entradas: Entrada[];
    constructor(public router: Router)
    {
        this.entradas = JSON.parse(localStorage.getItem('entradas'));        
        this.frmPublicar = new FormGroup(
            {
                "titulo": new FormControl("", [Validators.required, Validators.minLength(3)]),
                "cuerpo": new FormControl("", [Validators.required, Validators.minLength(50)]),
                "url": new FormControl("", [Validators.required]),
                "etiquetas": new FormControl("", [Validators.required, Validators.minLength(3)])
            });
    }

    ngOnInit(): void
    {
    }

    cancelarCrearEntrada()
    {
        let cancelarOK = confirm("¿Confirma que desea cancelar la creación de esta entrada?");
        if (cancelarOK)
        {
            this.router.navigate(['/entradas']);
        }        
    }

    publicar()
    {
        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()


        let entradaAPublicar: Entrada = new Entrada();

        entradaAPublicar.titulo = this.frmPublicar.controls["titulo"].value;
        entradaAPublicar.etiquetas = this.frmPublicar.controls["etiquetas"].value;
        entradaAPublicar.url = this.frmPublicar.controls["url"].value;
        entradaAPublicar.cuerpo = this.frmPublicar.controls["cuerpo"].value;
        entradaAPublicar.fechaCreacion = year + "-" + month + "-" + day;

        this.entradas.push(entradaAPublicar);

        localStorage.setItem('entradas', JSON.stringify(this.entradas));
        alert("Entrada guardada con éxito");
        this.router.navigate(['/entradas']);

        
        
    }

}
