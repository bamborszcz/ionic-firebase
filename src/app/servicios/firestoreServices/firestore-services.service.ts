import { Injectable } from '@angular/core';

// firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fireStoreInterface } from '../../models/fireStoreInterface.interface';
import { InputTituloComponent } from 'src/app/home/componentes/input-titulo/input-titulo.component';

export interface PortadaUrl extends fireStoreInterface { id: string; fotoUrl: string;  desc: string;
  titulo: string; video: string; }

@Injectable({
  providedIn: 'root'
})
export class FirestoreServicesService {

  private portadaCollection: AngularFirestoreCollection<fireStoreInterface>;
  private portada: Observable<PortadaUrl[]>;
  private portadaDocument: AngularFirestoreDocument<fireStoreInterface>;
  
  private titulo: string; // variables que cargo con los datos de los componentesdel front
  
  private desc: string;
  
  private menu: string;

  private videoSelecArchiv: boolean;
  // tslint:disable-next-line: max-line-length
  constructor( private readonly afs: AngularFirestore ) {} // esta variable la uso en el metodo que se activa cuando presionan enviar, si lo uso en el constructor no la puedo cambiar con "menu";





  public setFotoPortada(portada: Observable<PortadaUrl[]>): void {
    this.portada = portada;
  }

  public getFotoPortada(): Observable<PortadaUrl[]> { // me devuelve la foto de portada
    return this.portada;
  }

  public getPortadaColeccion(): AngularFirestoreCollection<fireStoreInterface> {
    return this.portadaCollection;
  }

  public setPortadaColeccion(portadaColeccion: AngularFirestoreCollection<fireStoreInterface>): void {
    this.portadaCollection = portadaColeccion;
  }

  // tslint:disable-next-line: no-shadowed-variable
  public agregarItem(fireStoreInterface: fireStoreInterface): void {

    this.getPortadaColeccion().add(fireStoreInterface); // agrega un documento a la coleccion en FIRESTORE!!
  }
  /*  PARA BORRAR!!!!
  public eliminarItem(item): void {

    this.portadaDocument = this.afs.doc<fireStoreInterface>(`portada/${item.id}`); // alt+96 comillas especiales
    this.portadaDocument.delete();

    }
*/
    public crearBBDD(urlFoto: string, videoUrl: string): fireStoreInterface { // carga los datos en la bbdd

      // tslint:disable-next-line: no-shadowed-variable
       const fireStoreInterface: any = {
        titulo: this.getTitulo(),
        fotoUrl: urlFoto,
        desc: this.getDesc(),
        video: videoUrl
      };


       this.elegirBBDD();
       return fireStoreInterface;
    }

  
   
   public setDesc(desc: string): void {
    this.desc = desc;
    }

   public getDesc(): string {
    return this.desc;
   }

   public setValorMenu(menu2: string): void {
      this.menu = menu2;
    }
    public getValorMenu(): string{
      return this.menu;
    }

    public setTitulo(titulo: string): void {
      this.titulo = titulo;
    }
    public getTitulo(): string {
      return this.titulo;
    }

    public setVideoSelecArchiv(videoSelecArchiv: boolean): void {
      this.videoSelecArchiv = videoSelecArchiv;
    }

    public getVideoSelecArchiv(): boolean {
      return this.videoSelecArchiv;
    }

   public elegirBBDD(): void {
       // tslint:disable-next-line: max-line-length
     this.setPortadaColeccion(this.afs.collection<fireStoreInterface>(this.getValorMenu())); // entre parentesis va el nombre de la coleccion que quiero traer de firebase!!

     this.setFotoPortada(this.getPortadaColeccion().snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as fireStoreInterface;
         const id = a.payload.doc.id; // nombre del documento

         return { id, ...data };
       }))
     ));

     this.getFotoPortada().subscribe((res => {
        console.log(res[0].id); // asi obtengo el id!!!

        
     }));

    }
}
