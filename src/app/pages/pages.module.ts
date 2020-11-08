import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms'
import { BlogEntradaComponent } from './blog-entrada/blog-entrada.component';
import { BlogEntradaCrearComponent } from './blog-entrada-crear/blog-entrada-crear.component';
import { BlogEntradaLecturaComponent } from './blog-entrada-lectura/blog-entrada-lectura.component';
import { BlogListaEntradasComponent } from './blog-lista-entradas/blog-lista-entradas.component';





@NgModule({
    declarations:
        [
            PagesComponent,
            BlogEntradaComponent,
            BlogEntradaCrearComponent,
            BlogEntradaLecturaComponent,
            BlogListaEntradasComponent
        ],
    exports:
        [
            
        ],
    imports:
        [
            CommonModule,            
            PagesRoutingModule,
            FormsModule,            
        ]

})
export class PagesModule { }
