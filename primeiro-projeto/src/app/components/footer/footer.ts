import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {

  private name = signal("henry");

  public get getName() {
    return this.name()
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.name.update(target => target += " franz")
    }, 2000)
  }

}
