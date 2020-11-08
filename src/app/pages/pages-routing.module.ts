import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { BlogListaEntradasComponent } from './blog-lista-entradas/blog-lista-entradas.component';
import { BlogEntradaComponent } from './blog-entrada/blog-entrada.component';
import { BlogEntradaCrearComponent } from './blog-entrada-crear/blog-entrada-crear.component';



const routes: Routes =
    [
        {
            path: '',
            component: PagesComponent,
            children:
                [
                    { path: 'entradas', component: BlogListaEntradasComponent, data: {titulo:'Mis entradas'} },
                    { path: 'entrada/:id', component: BlogEntradaComponent, data: { titulo: 'Mi entrada' } },
                    { path: 'publicar', component: BlogEntradaCrearComponent, data: { titulo: 'Publicar entrada' } },
                    //{ path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
                    //{ path: 'rxjs', component: RxjsComponent, data: { titulo: 'Observables RxJs' } },
                    //{ path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Configuración' } },
                    { path: '', redirectTo: '/entradas', pathMatch: 'full' },
                ]
        }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
