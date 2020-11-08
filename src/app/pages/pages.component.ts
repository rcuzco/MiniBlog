import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styles: [
    ]
})
export class PagesComponent implements OnInit
{
    env = environment;
    constructor(public router: Router) { }

    ngOnInit(): void
    {
        let isUserValidated = localStorage.getItem("isUserValidated");
        if (isUserValidated)
        {
            this.env.isUserValidated = true;
        }
        console.log("this.env.isUserValidated", this.env.isUserValidated);
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
            localStorage.removeItem('isUserValidated');
            this.env.isUserValidated = false;
            this.router.navigate(['login']);
        }
        
    }

    iniciarSesion()
    {
        this.env.isUserValidated = false;
        this.router.navigate(['login']);
    }


}
