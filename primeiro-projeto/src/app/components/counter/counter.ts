import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  private count: number = 0;

  public onClick() {
    this.count++
  }

  public onClickButtonReset() {
    this.count = 0;
  }

  get getCount(): number {
    return this.count
  }

  public onClickButtonPlus() {
    this.count++;
  }

  public onClickButtonMinus() {
    this.count--;
  }

}
