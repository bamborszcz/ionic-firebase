import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class BorrarService {

  constructor(private storageBorrar: AngularFireStorage) { }

  public borrar() {
    this.storageBorrar.ref('carpeta1/2020.png').delete();
  }
}
