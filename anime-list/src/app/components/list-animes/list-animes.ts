import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { ListAllAnimesTopService } from '../../services/list-all-animes-top';
import { AnimeData } from '../../anime-data';



@Component({
  selector: 'app-list-animes',
  templateUrl: './list-animes.html',
  styleUrl: './list-animes.css'
})
export class ListAnimes implements OnInit {
  private animes = signal([] as AnimeData[])

  constructor(private listAllAnimesTopService: ListAllAnimesTopService) { }

  @Output() public selectAnimeEvent = new EventEmitter<AnimeData>()

  ngOnInit(): void {
    this.listAllAnimesTopService.execute().subscribe({
      next: (response) => {
        this.animes.set(response.data)
      },
      complete: () => {
        console.log("finish fetch animes")
      }
    })

  }
  public get getAnimes() {
    return this.animes()
  }

  public selectAnime(anime: AnimeData) {
    this.selectAnimeEvent.emit(anime);
  }

}
