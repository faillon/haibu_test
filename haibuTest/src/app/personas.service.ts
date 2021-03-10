import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  private httpOptions: any;


  obtenerPersonas() {
    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.get(
      "https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user",
      this.httpOptions
    );
  }

}
