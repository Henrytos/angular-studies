import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private apiUrl = "https://api.jikan.moe/v4/top/characters";

  constructor(private httpClient: HttpClient) { }


  public get getCharaters(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

}
