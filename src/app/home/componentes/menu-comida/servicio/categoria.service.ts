import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria.interface';

export interface CategoriaUrl extends Categoria { id: number; categoria: string; }

@Injectable({
  providedIn: 'root'
})


export class CategoriaService implements OnInit {


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    
  }

  public getAllCategorias(): Observable<any> {

    return this.http.get<CategoriaUrl>('http://127.0.0.1:8080/categoria/lista');
  }

}
