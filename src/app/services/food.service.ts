import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  url : string = 'http://localhost:8085/food/';

  constructor(private http: HttpClient) { }

  ajouterFood(med:any):Observable<any>{
    return this.http.post(this.url+"add",med)
  }
  listeFood():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_food")
  }
  supprimerFood(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"delete_food/"+id);
    
  }
  modifierFood(med:any):Observable<any>{
    return this.http.put<any>(this.url+"update_food",med)
  }
  getFood(id:any):Observable<any>{
    return this.http.get<any>(this.url+"retrive_food/"+id)
  }
}
