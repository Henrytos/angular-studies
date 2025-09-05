import { Component, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { AnimeData } from '../anime-data';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.html',
  styleUrl: './sheet.css'
})
export class Sheet implements OnChanges {

  private readonly DEFAULT_VALUE_SHEET = false;

  private isOpen = signal(this.DEFAULT_VALUE_SHEET);

  @Input() animeSelectedTarget: AnimeData | undefined = undefined;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes["animeSelectedTarget"].currentValue != undefined || changes["animeSelectedTarget"].currentValue != changes["animeSelectedTarget"].previousValue) {
      console.log("this.openShet()")
      this.openShet()

    }
  }

  public toogle() {
    this.isOpen.update(current => !current);
  }

  public openShet() {
    this.isOpen.set(true);
  }

  public close() {
    this.isOpen.set(false);
  }

  public get getIsOpen() {
    return this.isOpen()
  }

}
