import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-home',
  imports: [Footer, Counter],
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
