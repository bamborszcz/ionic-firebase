import { Component, OnInit} from '@angular/core';
import { FirestoreServicesService } from 'src/app/servicios/firestoreServices/firestore-services.service';
import { StorageService } from 'src/app/servicios/storageServices/storage.service';

@Component({
  selector: 'app-input-titulo',
  templateUrl: './input-titulo.component.html',
  styleUrls: ['./input-titulo.component.scss'],
})

export class InputTituloComponent implements OnInit {

 private titulo: string;
 private limpiarTitulo: string = this.firestoreServ.getTitulo();

  constructor(private firestoreServ: FirestoreServicesService, private storageService: StorageService ) {}

  ngOnInit() { 
    console.log(this.titulo);
  }

  public borrar(): string {
    this.setLimpiar(this.firestoreServ.getTitulo());
    return this.getLimpiar();
  }

  public getLimpiar(): string {
    return this.limpiarTitulo;
  }

  public setLimpiar(limpiar: string): void {
    this.limpiarTitulo = limpiar;
  }
  
  public getTitulo(): string {
    return this.titulo;
  }

  public setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  public elegirTitulo(event): void {
  this.setTitulo(event.target.value);
  console.log(this.getTitulo());
  this.firestoreServ.setTitulo(this.getTitulo());
  this.storageService.setCheckTitulo(true);  
     }
}
