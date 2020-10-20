import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

// componentes
import { MenuComidaComponent } from './componentes/menu-comida/menu-comida.component';
import { InputTituloComponent } from './componentes/input-titulo/input-titulo.component';
import { SelectorArchivoComponent } from './componentes/selector-archivo/selector-archivo.component';
import { TextAreaDescComponent } from './componentes/text-area-desc/text-area-desc.component';
import { BotonesComponent } from './componentes/botones/botones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    MenuComidaComponent,
    InputTituloComponent,
    SelectorArchivoComponent,
    TextAreaDescComponent,
    BotonesComponent
  ]
})
export class HomePageModule {}
