import { Injectable } from '@angular/core';

// firebase
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { FirestoreServicesService } from '../firestoreServices/firestore-services.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private uploadPercentFoto: number;
  private downLoadURLFoto: string;

  private filePathFoto: string;
  private fileFoto: File;

  private uploadPercentVideo: number;
  private downLoadURLVideo: string;

  private filePathVideo: string;
  private fileVideo: File;

  private checkVideo: boolean = false;
  private checkFoto: boolean = false;
  private checkTitulo: boolean = false;
  private checkDesc: boolean = false;
  private checkMenu: boolean = false;

  // tslint:disable-next-line: max-line-length
  constructor( private storageFoto: AngularFireStorage, private firestoreServ: FirestoreServicesService, private storageVideo: AngularFireStorage) {

   }

   public cargarFoto() {

    const fileRefFoto = this.storageFoto.ref(this.getFilePathFoto()); // foto
    const taskFoto = this.storageFoto.upload(this.getFilePathFoto(), this.getFileFoto());
    taskFoto.percentageChanges().subscribe(resp => {

    
    this.setUploadPercentFoto(resp / 100);
  } );

    taskFoto.snapshotChanges().pipe(finalize(() => {
    fileRefFoto.getDownloadURL().subscribe((url) => {
     this.setDownLoadURLFoto(url);
     console.log(url);
     this.setCheckFoto(true);
     });
  })).subscribe();
    
   }

   public CargarVideo() {
    

    const fileRefVideo = this.storageVideo.ref(this.getFilePathVideo()); // video
    const taskVideo = this.storageVideo.upload(this.getFilePathVideo(), this.getFileVideo());
    taskVideo.percentageChanges().subscribe(resp => {

    this.setUploadPercentVideo(resp / 100);
  } );

    taskVideo.snapshotChanges().pipe(finalize(() => {
    fileRefVideo.getDownloadURL().subscribe((url) => {
     this.setDownLoadURLVideo(url);
     console.log(url);
     this.setCheckVideo(true);
    });
  })).subscribe();
   
    
    
   }
  public cargarStorageFirebase(): void {
   
    this.firestoreServ.agregarItem(this.firestoreServ.crearBBDD(this.getDownLoadURLFoto(), this.getDownLoadURLVideo()));

    console.log(this.getDownLoadURLVideo());
    console.log(this.getDownLoadURLFoto());

  }
//////////////////////////////////CHECKS////////////////////////////////////////////////////////////
public setCheckVideo(checkVideo:boolean):void {
  this.checkVideo = checkVideo;
}
public getCheckVideo():boolean {
  return this.checkVideo;
}
public setCheckFoto(checkFoto:boolean):void {
  this.checkFoto = checkFoto;
}
public getCheckFoto():boolean {
  return this.checkFoto;
}
public setCheckTitulo(checkTitulo:boolean):void {
  this.checkTitulo = checkTitulo;
}
public getCheckTitulo():boolean {
  return this.checkTitulo;
}
public setCheckDesc(checkDesc:boolean):void {
  this.checkDesc = checkDesc;
}
public getCheckDesc():boolean {
  return this.checkDesc;
}
public setCheckMenu(checkMenu:boolean):void {
  this.checkMenu = checkMenu;
}
public getCheckMenu():boolean {
  return this.checkMenu;
}

/////////////////////////////FOTO////////////////////////////////////////////////////////////
  public getUploadPercentFoto(): number {
  return this.uploadPercentFoto;
  }

  public setUploadPercentFoto(uploadPercentFoto: number): void {
    this.uploadPercentFoto = uploadPercentFoto;
  }

  public getDownLoadURLFoto(): string {
    return this.downLoadURLFoto;
  }

  public setDownLoadURLFoto(downLoadURLFoto: string): void {
    this.downLoadURLFoto = downLoadURLFoto;
  }

  public getFileFoto(): File {
    return this.fileFoto;
  }
  public setfileFoto(fileFoto: File): void {
      this.fileFoto = fileFoto;
  }

  public getFilePathFoto(): string {
    return this.filePathFoto;
  }

  public setfilePathFoto(filePathFoto: string): void {
      this.filePathFoto = filePathFoto;
  }
///////////////////// video //////////////////////////////////////////

public getUploadPercentVideo(): number {
  return this.uploadPercentVideo;
  }

  public setUploadPercentVideo(uploadPercentVideo: number): void {
    this.uploadPercentVideo = uploadPercentVideo;
  }

  public getDownLoadURLVideo(): string {
    return this.downLoadURLVideo;
  }

  public setDownLoadURLVideo(downLoadURLVideo: string): void {
    this.downLoadURLVideo = downLoadURLVideo;
  }

  public getFileVideo(): File {
    return this.fileVideo;
  }
  public setfileVideo(fileVideo: File): void {
      this.fileVideo = fileVideo;
  }

  public getFilePathVideo(): string {
    return this.filePathVideo;
  }

  public setfilePathVideo(filePathVideo: string): void {
      this.filePathVideo = filePathVideo;
  }


}
