import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  private count = signal(0);

  public onClick() {
    this.count.update(target => target + 1)
  }

  public onClickButtonReset() {
    this.count.set(0);
  }

  get getCount(): number {
    return this.count();
  }

  public onClickButtonPlus() {
    this.count.update(target => target + 1)
  }

  public onClickButtonMinus() {
    this.count.update(target => target - 1)
  }

}
