import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Entrada } from '../../interfaces/entrada.interface';

@Component({
    selector: 'app-blog-entrada',
    templateUrl: './blog-entrada.component.html',
    styleUrls: ['./blog-entrada.component.css']
})
export class BlogEntradaComponent implements OnInit, OnChanges
{
    @Input() entrada: Entrada;
    @Input() entradaIndex: number;
    id: number;
    
    constructor(public router: Router, private route: ActivatedRoute)
    {
        var entradas:Entrada[] = JSON.parse(localStorage.getItem('entradas'));
        this.route.params.subscribe(paramertrosURL =>
        {
            this.id = paramertrosURL["id"];            
            this.entrada = entradas[this.id];

        });
        
    }
    

    ngOnInit(): void
    {        
    }

    ngOnChanges(changes: SimpleChanges): void
    {
        
        
    }

    irAEntrada()
    {        
        this.router.navigate(['/entrada/' + this.entradaIndex]);
    }

}
