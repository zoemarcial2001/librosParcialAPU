import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http:HttpClient) { 

  }

  public searchLibro(nombre:string):Observable<any>{
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
        'X-RapidAPI-Key': 'a6e2d4587bmsh951469e49f06c20p191061jsnb57f136bc429'
      })
    }
    return this.http.get("https://hapi-books.p.rapidapi.com/search/"+nombre, options);
  }

  public searchId(id:string):Observable<any>{
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
        'X-RapidAPI-Key': 'a6e2d4587bmsh951469e49f06c20p191061jsnb57f136bc429'
      })
    }
    return this.http.get("https://hapi-books.p.rapidapi.com/book/"+id, options)
  }
  
}
