import { Component, OnInit } from '@angular/core';
import { FirestoreServicesService } from 'src/app/servicios/firestoreServices/firestore-services.service';
import { StorageService } from 'src/app/servicios/storageServices/storage.service';

@Component({
  selector: 'app-text-area-desc',
  templateUrl: './text-area-desc.component.html',
  styleUrls: ['./text-area-desc.component.scss'],
})
export class TextAreaDescComponent implements OnInit {

  private desc: string;

  private limpiarDesc: string = this.firestoreServ.getDesc();

  constructor(private firestoreServ: FirestoreServicesService, private storageService: StorageService) {
    
   }

  ngOnInit() {
    
  }

  public borrar():string {
    this.setLimpiar(this.firestoreServ.getDesc()); 
    return this.getLimpiar();
  }
  public getLimpiar(): string {
    return this.limpiarDesc;
  }

  public setLimpiar(limpiarDesc: string): void {
    this.limpiarDesc = limpiarDesc;
  }

  public getDesc(): string {
    return this.desc;
  }

  public setDesc(desc: string): void {
    this.desc = desc;
  }

  public elegirTitulo(event): void {
  this.setDesc(event.target.value);
  console.log(this.getDesc());
  this.firestoreServ.setDesc(this.getDesc());
  this.storageService.setCheckDesc(true);
     }
}
