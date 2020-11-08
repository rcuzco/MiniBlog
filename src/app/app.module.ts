import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListaEntradasComponent } from './components/blog-lista-entradas/blog-lista-entradas.component';
import { BlogEntradaComponent } from './components/blog-entrada/blog-entrada.component';
import { BlogEntradaLecturaComponent } from './components/blog-entrada-lectura/blog-entrada-lectura.component';
import { LoginComponent } from './login/login.component';
import { BlogEntradaCrearComponent } from './components/blog-entrada-crear/blog-entrada-crear.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    //BlogListaEntradasComponent,
    //BlogEntradaComponent,
    //BlogEntradaLecturaComponent,
    LoginComponent,
    //BlogEntradaCrearComponent
  ],
  imports: [
      BrowserModule,
      ComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
