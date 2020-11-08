import { Component, OnInit, Input } from '@angular/core';
import { Entrada } from '../../interfaces/entrada.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-blog-entrada-lectura',
    templateUrl: './blog-entrada-lectura.component.html',
    styleUrls: ['./blog-entrada-lectura.component.css']
})
export class BlogEntradaLecturaComponent implements OnInit
{
    @Input() entrada: Entrada;
    id: number;
    constructor(public router: Router, private route: ActivatedRoute)
    {
        var entradas: Entrada[] = JSON.parse(localStorage.getItem('entradas'));
        this.route.params.subscribe(paramertrosURL =>
        {
            this.id = paramertrosURL["id"];
            this.entrada = entradas[this.id];

        });

    }

    ngOnInit(): void
    {
    }

}
