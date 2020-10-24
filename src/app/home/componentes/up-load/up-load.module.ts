import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpLoadPageRoutingModule } from './up-load-routing.module';

import { UpLoadPage } from './up-load.page';

import { MenuComidaComponent } from '../menu-comida/menu-comida.component';
import { InputTituloComponent } from '../input-titulo/input-titulo.component';
import { SelectorArchivoComponent } from '../selector-archivo/selector-archivo.component';
import { TextAreaDescComponent } from '../text-area-desc/text-area-desc.component';
import { BotonesComponent } from '../botones/botones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpLoadPageRoutingModule
  ],
  declarations: [UpLoadPage,
    MenuComidaComponent,
    InputTituloComponent,
    SelectorArchivoComponent,
    TextAreaDescComponent,
    BotonesComponent
  ]
})
export class UpLoadPageModule {}
