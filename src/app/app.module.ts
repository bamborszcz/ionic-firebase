import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// firebase ionic
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

// servicio
import { StorageService } from './servicios/storageServices/storage.service';
import { FirestoreServicesService } from './servicios/firestoreServices/firestore-services.service';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // inicializa firebase
    AngularFireStorageModule, // PARA GUARDAR EN EL STORAGE DE FIEBASE
    AngularFirestoreModule // PARA USAR LA BBDD DE FIREBASE
  ],
  providers: [
    FirestoreServicesService,
    StorageService,
    StatusBar,
    SplashScreen,
    AngularFireStorageModule, // PARA GUARDAR EN EL STORAGE DE FIEBASE
    AngularFirestoreModule, // PARA USAR LA BBDD DE FIREBASE
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
