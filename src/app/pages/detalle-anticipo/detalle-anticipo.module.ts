import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAnticipoPageRoutingModule } from './detalle-anticipo-routing.module';

import { DetalleAnticipoPage } from './detalle-anticipo.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAnticipoPageRoutingModule,
    PipesModule,
    ComponentModule
  ],
  declarations: [DetalleAnticipoPage]
})
export class DetalleAnticipoPageModule {}
