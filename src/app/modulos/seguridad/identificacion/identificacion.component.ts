import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const cryptoJS = require("cryptojs");

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit{

  fgValidator: FormGroup = this.fb.group ({
    "usuario":["",[Validators.required, Validators.email]],
    "clave": ["", [Validators.required]]
  });

  constructor (private fb: FormBuilder){}

  ngOnInit(): void {
      
  }

  IdentificarUsuario(){
    let usuario = this.fgValidator.controls["usuario"].value;
    let clave = this.fgValidator.controls["clave"].value;
    //ensayis de que esta tomando los valores del formulario
    //alert(usuario);
    //alert(clave);
    let claveCifrada = cryptoJS.MD5(clave);
  }

}
