import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
    env = environment;
    frmLogin: FormGroup;
    constructor(public router: Router)
    {
        this.frmLogin = new FormGroup(
            {
                "usuario": new FormControl("", [Validators.required, Validators.minLength(3)]),
                "password": new FormControl("", [Validators.required]),                
                "recordarme": new FormControl()
            });
    }

    ngOnInit(): void
    {

    }

    entrar()
    {
        let usuario = this.frmLogin.controls["usuario"].value;
        let password = this.frmLogin.controls["password"].value;
        if (usuario === "admin" && password === "admin")
        {
            this.router.navigate(["/entradas"]);
            this.env.isUserValidated = true;
        } else
        {
            alert("credenciales incorrectas. Revise e intente otra vez");
            this.env.isUserValidated = false;
        }

        
    }
}
