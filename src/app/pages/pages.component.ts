import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styles: [
    ]
})
export class PagesComponent implements OnInit
{

    constructor(public router: Router) { }

    ngOnInit(): void
    {
        
    }

    publicar()
    {
        this.router.navigate(['/publicar']);
    }

    cerrarSesion()
    {
        let cerrarSesionOK = confirm("¿Confirma que desea cerrar sesión?");
        if (cerrarSesionOK)
        {
            this.router.navigate(['login']);
        }
        
    }

    iniciarSesion()
    {
        this.router.navigate(['login']);
    }


}
