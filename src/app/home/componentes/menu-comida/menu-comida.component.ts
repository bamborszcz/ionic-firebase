import { Component, OnInit } from '@angular/core';
import { FirestoreServicesService } from '../../../servicios/firestoreServices/firestore-services.service';
import { StorageService } from 'src/app/servicios/storageServices/storage.service';
import { CategoriaService } from './servicio/categoria.service';

@Component({
  selector: 'app-menu-comida',
  templateUrl: './menu-comida.component.html',
  styleUrls: ['./menu-comida.component.scss'],
})
export class MenuComidaComponent implements OnInit {

  private categoriaList: [] = [];

  //public valorMenu: string;
  //private limpiarMenu: string = this.firestoreServ.getValorMenu();

  constructor(/*private storageService: StorageService, private firestoreServ: FirestoreServicesService,*/ private categoriaServ: CategoriaService) { }

  ngOnInit() {
    this.getAllCategoriaList();
  }

  public getAllCategoriaList(): void {

    this.categoriaServ.getAllCategorias().subscribe(
      data => {
      this.setCategoriaList(data);
      console.log(data);
      }
    );
  }

  public getCategoriaList(): [] {
    return this.categoriaList;
  }
  public setCategoriaList(categoriaList: []): void {
    this.categoriaList = categoriaList;
  }
  /*public borrar(): string {
    this.limpiarMenu = this.firestoreServ.getValorMenu();
    return this.limpiarMenu;
  }
  public menuComida (event): void {
    this.valorMenu = event.target.value;
    console.log(this.valorMenu);
    this.firestoreServ.setValorMenu(this.valorMenu);
    console.log(this.firestoreServ.getValorMenu());
    this.storageService.setCheckMenu(true);
    if (this.firestoreServ.getValorMenu() === 'videos') {
      this.firestoreServ.setVideoSelecArchiv(true);
    } else {
      this.firestoreServ.setVideoSelecArchiv(false);
    }
     }*/
}
