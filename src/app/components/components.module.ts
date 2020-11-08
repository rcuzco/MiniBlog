import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'
import { ComponentsRoutingModule } from './components-routing.module';
import { BlogEntradaComponent } from './blog-entrada/blog-entrada.component';
import { BlogEntradaLecturaComponent } from './blog-entrada-lectura/blog-entrada-lectura.component';
import { BlogListaEntradasComponent } from './blog-lista-entradas/blog-lista-entradas.component';
import { BlogEntradaCrearComponent } from './blog-entrada-crear/blog-entrada-crear.component';
//import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
    declarations:
        [
            //PagesComponent,
            //DashboardComponent,
            //ProgressComponent,
            //Graficas1Component,
            //IncrementadorComponent,
            //GraficoDonaComponent,
            //AccountSettingsComponent,
            //PromesasComponent,
            //RxjsComponent
            BlogEntradaComponent,
            BlogEntradaLecturaComponent,
            BlogListaEntradasComponent,
            BlogEntradaCrearComponent,
        ],
    exports:
        [
            //DashboardComponent,
            //ProgressComponent,
            //Graficas1Component
        ],
    imports:
        [
            CommonModule,
            ComponentsRoutingModule,
            FormsModule           
        ]

})
export class ComponentsModule { }
