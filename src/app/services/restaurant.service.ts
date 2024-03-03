import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  url : string = 'http://localhost:8085/restaurant/';

  constructor(private http: HttpClient) { }

  ajouterRestaurant(med:any):Observable<any>{
    return this.http.post(this.url+"add",med)
   

  }
  listeRestaurant():Observable<any>{
    return this.http.get<any>(this.url+"retrive_all_restaurant")
  }
  supprimerRestaurant(id:any):Observable<any>{
    return this.http.delete<any>(this.url+"delete_restaurant/"+id);
    
  }
  modifierRestaurant(med:any):Observable<any>{
    return this.http.put<any>(this.url+"update_restaurant",med)
  }
  getRestaurant(id:any):Observable<any>{

    return this.http.get<any>(this.url+"retrive_restaurant/"+id)
  }}
