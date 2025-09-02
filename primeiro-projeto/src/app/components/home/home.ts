import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  ativo:boolean = false;

  mudarAtivo(value: boolean){
    this.ativo = value;
  }
}
