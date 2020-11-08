import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blog-entrada',
    templateUrl: './blog-entrada.component.html',
    styleUrls: ['./blog-entrada.component.css']
})
export class BlogEntradaComponent implements OnInit
{

    constructor(public router: Router) { }

    ngOnInit(): void
    {
    }

    irAEntrada(idEntrada: number)
    {
        this.router.navigate(['/entrada/1']);
    }

}
