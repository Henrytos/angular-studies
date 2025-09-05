import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimeData } from '../anime-data';

interface ListAllAnimesTopServiceResponse {
  data: AnimeData[]
}

@Injectable({
  providedIn: 'root'
})
export class ListAllAnimesTopService {
  private apiPublicUrl = "https://api.jikan.moe/v4/top/anime";

  constructor(private http: HttpClient) { }

  public execute() {
    return this.http.get<ListAllAnimesTopServiceResponse>(this.apiPublicUrl);
  }

}
