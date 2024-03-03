import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatService {


  url : string = 'http://localhost:8085/plat/';

  constructor(private http: HttpClient) { }

  ajouterPlat(pt:any):Observable<any>{
    return this.http.post(this.url+"add",pt)
  }
  listePlats():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_plat")
  }
  supprimerPlats(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"delete_plat/"+id);
    
  }
  modifierPlats(plats:any):Observable<any>{
    return this.http.put<any>(this.url+"update_plat",plats)
  }
  getPlat(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrive_plat/"+id)
  }}
