import { Component, OnInit, ElementRef } from '@angular/core';
import { StorageService } from 'src/app/servicios/storageServices/storage.service';
import { FirestoreServicesService } from 'src/app/servicios/firestoreServices/firestore-services.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-selector-archivo',
  templateUrl: './selector-archivo.component.html',
  styleUrls: ['./selector-archivo.component.scss'],
})
export class SelectorArchivoComponent implements OnInit {


  // tslint:disable-next-line: max-line-length
  constructor( public storageServicesFoto: StorageService, public storageServicesVideo: StorageService, private firestoreServ: FirestoreServicesService ) { 
    
  }

  ngOnInit() {

  }

  @ViewChild('reset', {static: true}) 
  myInputVariableReset: ElementRef;
 
  
  reset() {

   this.myInputVariableReset.nativeElement.value = '';
   
}



  public elegirArchivoFoto(event): void {

    this.storageServicesFoto.setfileFoto(event.target.files[0]);

    this.storageServicesFoto.setfilePathFoto(`carpeta1/${this.storageServicesFoto.getFileFoto().name}`);

    this.storageServicesFoto.cargarFoto();

    this.reset();
    
    
    }

    public elegirArchivoVideo(event): void {

      this.storageServicesVideo.setfileVideo(event.target.files[0]);
  
      this.storageServicesVideo.setfilePathVideo(`carpeta1/${this.storageServicesVideo.getFileVideo().name}`);
    
      this.storageServicesVideo.CargarVideo();

      this.reset();
      }




}
