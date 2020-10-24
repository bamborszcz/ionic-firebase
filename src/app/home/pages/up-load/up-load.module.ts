import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpLoadPageRoutingModule } from './up-load-routing.module';

import { UpLoadPage } from './up-load.page';

import { MenuComidaComponent } from '../up-load/componentes/menu-comida/menu-comida.component';
import { InputTituloComponent } from '../up-load/componentes/input-titulo/input-titulo.component';
import { SelectorArchivoComponent } from '../up-load/componentes/selector-archivo/selector-archivo.component';
import { TextAreaDescComponent } from '../up-load/componentes/text-area-desc/text-area-desc.component';
import { BotonesComponent } from '../up-load/componentes/botones/botones.component';

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
