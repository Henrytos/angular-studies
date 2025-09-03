import { Component, signal } from '@angular/core';
import { Footer } from '../footer/footer';
import { Counter } from '../counter/counter';
import { Profile } from "../profile/profile";
import { List } from '../list/list';
import { ListCharacters } from '../list-characters/list-characters';

@Component({
  selector: 'app-home',
  imports: [Footer, Counter, Profile, List, ListCharacters],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private ativo = signal(false);

  public mudarAtivo(value: boolean) {
    this.ativo.set(value);
  }

  public get getAtivo(): boolean {
    return this.ativo();
  }

  public onClickButton() {
    this.ativo.update(current => !current);
  }
}
