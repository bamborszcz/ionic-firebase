import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../servicios/storageServices/storage.service';
import { FirestoreServicesService } from 'src/app/servicios/firestoreServices/firestore-services.service';
import { InputTituloComponent } from '../input-titulo/input-titulo.component';
import { TextAreaDescComponent } from '../text-area-desc/text-area-desc.component';
import { SelectorArchivoComponent } from '../selector-archivo/selector-archivo.component';
import { MenuComidaComponent } from '../menu-comida/menu-comida.component';
import { BorrarService } from 'src/app/servicios/borrar/borrar.service';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss'],
})
export class BotonesComponent implements OnInit {

  private checkInfo: boolean = true;
  
  // tslint:disable-next-line: max-line-length
  constructor( private storageService: StorageService, private firestoreServ: FirestoreServicesService, private borrarStorage: BorrarService ) {}

  ngOnInit() {
  }

  public check() {
    if (this.firestoreServ.getValorMenu()==='videos') {
       if (this.storageService.getCheckFoto() === true && this.storageService.getCheckVideo() === true &&
        this.storageService.getCheckMenu() === true && this.storageService.getCheckTitulo() === true && this.storageService.getCheckDesc() === true ) {
        this.setCheckInfo(false);
        } else {
           this.setCheckInfo(true);
               }
    } else {
      if (this.storageService.getCheckFoto() === true  && this.storageService.getCheckMenu() === true && this.storageService.getCheckTitulo() ===true && this.storageService.getCheckDesc() === true ) {
        this.storageService.setDownLoadURLVideo('');
        this.setCheckInfo(false);
        } else {
           this.setCheckInfo(true);
               }
    }
   



return this.getCheckInfo();
  }

 public enviar(): void {

    this.storageService.cargarStorageFirebase();
   
    this.storageService.setCheckDesc(false);
    this.storageService.setCheckVideo(false);
    this.storageService.setCheckTitulo(false);
    this.storageService.setCheckMenu(false);
    this.storageService.setCheckFoto(false);

    this.firestoreServ.setTitulo('');
    this.firestoreServ.setDesc('');
    this.firestoreServ.setValorMenu('');
  var limpiarTitulo = new InputTituloComponent(this.firestoreServ, this.storageService);
  limpiarTitulo.borrar();
  var limpiarDesc = new TextAreaDescComponent(this.firestoreServ, this.storageService);
  limpiarDesc.borrar();
  //var limpiarMenu = new MenuComidaComponent(this.storageService, this.firestoreServ);
  //limpiarMenu.borrar();
  
  this.storageService.setUploadPercentFoto(0);
  this.storageService.setUploadPercentVideo(0);
  

  
  }

  public setCheckInfo(check: boolean): void {
    this.checkInfo = check;
  }
  public getCheckInfo(): boolean {
    return this.checkInfo;
  }

  borrar () {
      this.borrarStorage.borrar();
  }
}
