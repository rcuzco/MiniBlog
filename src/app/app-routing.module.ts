import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListaEntradasComponent } from './components/blog-lista-entradas/blog-lista-entradas.component';
import { BlogEntradaLecturaComponent } from './components/blog-entrada-lectura/blog-entrada-lectura.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =
    [
        { path: "login", component: LoginComponent },
        { path: "", component: LoginComponent },

    ];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
