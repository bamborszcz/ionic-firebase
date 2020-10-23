// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {// conexion a firebase
    apiKey: "AIzaSyCIiX5aOHSDzDKmVJ-KIJCrMtkKzxVKqN0",
    authDomain: "prueba-6efe8.firebaseapp.com",
    databaseURL: "https://prueba-6efe8.firebaseio.com",
    projectId: "prueba-6efe8",
    storageBucket: "prueba-6efe8.appspot.com",
    messagingSenderId: "1017886741776",
    appId: "1:1017886741776:web:4b3a43cf253a784fa00195",
    measurementId: "G-GXETDG12NS"
  } // npm install firebase @angular/fire --save hay que instalar esta dependencia por terminal
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
