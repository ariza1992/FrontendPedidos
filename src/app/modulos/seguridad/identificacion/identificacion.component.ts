import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoJS = require("cryptojs");
//import * as cryptoJS from "crypto-js";

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

  constructor (private fb: FormBuilder,
  private servicioSeguridad: SeguridadService){}

  ngOnInit(): void {
      
  }

  IdentificarUsuario(){
    let usuario = this.fgValidator.controls["usuario"].value;
    let clave = this.fgValidator.controls["clave"].value;
    //ensayis de que esta tomando los valores del formulario
    //alert(usuario);
    //alert(clave);
    let claveCifrada = clave;
    //cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any) => {
      //OK
      alert("Datos Correctos")
    }, (error: any) => {
      //Error
      alert("Datos Invalidos")
    })
  }

}
