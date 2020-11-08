import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListaEntradasComponent } from './blog-lista-entradas/blog-lista-entradas.component';
import { BlogEntradaComponent } from './blog-entrada/blog-entrada.component';
import { BlogEntradaLecturaComponent } from './blog-entrada-lectura/blog-entrada-lectura.component';
import { BlogEntradaCrearComponent } from './blog-entrada-crear/blog-entrada-crear.component';



const routes: Routes =
    [
        {
            path: 'entradas',
            component: BlogListaEntradasComponent,
            children:
                [
                    { path: 'entrada', component: BlogEntradaLecturaComponent, data: { titulo: 'Dashboard' } },
                    { path: 'crearEntrada', component: BlogEntradaCrearComponent, data: { titulo: 'Progress' } },
                    { path: '', redirectTo: '/entradas', pathMatch: 'full' },
                ]
        }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
