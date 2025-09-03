import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Counter } from '../counter/counter';
import { Profile } from "../profile/profile";

@Component({
  selector: 'app-home',
  imports: [Footer, Counter, Profile],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  ativo: boolean = false;

  mudarAtivo(value: boolean) {
    this.ativo = value;
  }

  onClickButton() {
    this.ativo = !this.ativo
  }
}
