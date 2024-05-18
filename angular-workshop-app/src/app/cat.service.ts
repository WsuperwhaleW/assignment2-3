import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http:HttpClient) { 
  }
  getFact(){
     return this.http.get('https://catfact.ninja/fact') 
  };
}
