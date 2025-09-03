import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  private readonly list = signal(["henry", "duda", "anthony", "otavio", "guilherme"]);


  public get getList() {
    return this.list();
  }


}
