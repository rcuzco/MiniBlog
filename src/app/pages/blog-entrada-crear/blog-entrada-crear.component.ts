import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blog-entrada-crear',
    templateUrl: './blog-entrada-crear.component.html',
    styleUrls: ['./blog-entrada-crear.component.css']
})
export class BlogEntradaCrearComponent implements OnInit
{

    constructor(public router: Router) { }

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

}
