import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    BuscarPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    CrearProductoComponent,
    BuscarProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
