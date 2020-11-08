import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { Local } from 'protractor/built/driverProviders';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
    env = environment;
    frmLogin: FormGroup; 
    recordarme: string;
    constructor(public router: Router)
    {
        this.frmLogin = new FormGroup(
            {
                "usuario": new FormControl("", [Validators.required, Validators.minLength(3)]),
                "password": new FormControl("", [Validators.required]),                
                "recordarme": new FormControl()
            });
        localStorage.removeItem('isUserValidated');
    }

    ngOnInit(): void
    {
        this.recordarme = localStorage.getItem("recordarme");
        if (this.recordarme)
        {
            let usuario = localStorage.getItem("usuario");
            this.frmLogin.controls["usuario"].setValue(usuario);
        }
    }

    entrar()
    {
        let usuario = this.frmLogin.controls["usuario"].value;
        let password = this.frmLogin.controls["password"].value;
        this.recordarme = this.frmLogin.controls["recordarme"].value;
        if (usuario === "admin" && password === "admin")
        {            
            if (this.recordarme)
            {
                localStorage.setItem("recordarme", this.recordarme);
                localStorage.setItem("usuario", usuario);
            }            
            this.env.isUserValidated = true;
            localStorage.setItem("isUserValidated", "true");
            this.router.navigate(["/entradas"]);
            
        } else
        {
            alert("credenciales incorrectas. Revise e intente otra vez");
            this.env.isUserValidated = false;
        }

        
    }
}
