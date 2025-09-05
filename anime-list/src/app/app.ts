import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Header } from './components/header/header';
import { ListAnimes } from './components/list-animes/list-animes';
import { Sheet } from './sheet/sheet';
import { AnimeData } from './anime-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ListAnimes, Footer, Sheet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anime-list');
  public animeSelected: AnimeData | undefined = undefined;

  selectedAnimeChild(animeTarget: AnimeData) {
    this.animeSelected = animeTarget;
  }

}
